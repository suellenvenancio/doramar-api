import dotenv from "dotenv"
import { EnvironmentContext, JestEnvironmentConfig } from "@jest/environment"
import NodeEnviroment from "jest-environment-node"
import { Client } from "pg"
import util from "node:util"
import crypto from "node:crypto"
import { exec } from "node:child_process"

dotenv.config({
  path: ".env.test",
})

const execSync = util.promisify(exec)

const prismaBinary = "./node_modules/.bin/prisma"

export default class PrismaTestEnvironment extends NodeEnviroment {
  private schema: string
  private connectionString: string
  constructor(config: JestEnvironmentConfig, context: EnvironmentContext) {
    super(config, context)

    const dbUser = process.env.DATABASE_USER_TEST
    const dbPassword = process.env.DATABASE_PASSWORD_TEST
    const dbHost = process.env.DATABASE_HOST_TEST
    const dbPort = process.env.DATABASE_PORT_TEST
    const dbName = process.env.DATABASE_NAME_TEST

    this.schema = `test_${crypto.randomUUID()}`
    this.connectionString = `postgresql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}?schema=${this.schema}`
  }

  async setup() {
    process.env.DATABASE_URL_TEST = this.connectionString
    this.global.process.env.DATABASE_URL_TEST = this.connectionString

    await execSync(`${prismaBinary} migrate deploy`)
    await super.setup()
  }

  async teardown() {
    const client = new Client({
      connectionString: this.connectionString,
    })
    await client.connect()
    await client.query(`DROP SCHEMA IF EXISTS "${this.schema}" CASCADE;`)
    await client.end()
    await super.teardown()
  }
}
