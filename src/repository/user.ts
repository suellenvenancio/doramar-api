import { prisma } from "../app"
import { AppError } from "../utils/errors"
import { RegisterUserInput } from "../types"
import password from "./password"

async function hashedPasswordObject(register: RegisterUserInput) {
  const passwordHashed = await password.hash(register.password)
  return { ...register, password: passwordHashed }
}

async function validationUniqueEmail(email: string) {
  const user = await prisma.users.findUnique({
    where: { email },
  })

  if (user) {
    throw new AppError("Email already in use!", 409)
  }
  return true
}

async function validationUniqueUsername(username: string) {
  const user = await prisma.users.findUnique({
    where: { username },
  })

  if (user) {
    throw new AppError("Username already in use!", 409)
  }
  return true
}

async function findUserById(id: string) {
  const user = await prisma.users.findUnique({
    where: { id },
  })

  if (!user) {
    throw new AppError("User not found!", 404)
  }
  return user
}

async function validateEmail(email: string) {
  const user = await prisma.users.findUnique({
    where: { email },
  })

  return user
}

const user = {
  validationUniqueEmail,
  findUserById,
  hashedPasswordObject,
  validationUniqueUsername,
  validateEmail,
}

export default user
