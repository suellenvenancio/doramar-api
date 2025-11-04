import { prisma } from "../lib/prisma"
import { AppError } from "../utils/errors"
import { RegisterUserInput, User } from "../types"
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
  const user = await prisma.users.findFirst({
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
  return {
    id: user.id,
    username: user.username,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }
}

async function findByEmail(email: string) {
  const user = await prisma.users.findUnique({
    where: { email },
  })

  if (!user) {
    throw new AppError("User not found!", 404)
  }

  return {
    id: user.id,
    username: user.username,
    name: user.name,
    email: user.email,
    password: user.password,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }
}

async function createUser(data: RegisterUserInput) {
  return await prisma.users.create({
    data: {
      ...data,
    },
  })
}

async function updateUser(
  id: string,
  data: Partial<Omit<User, "id" | "createdAt">>
) {
  const updatedUser = await prisma.users.update({
    where: { id },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  })
  return {
    id: updatedUser.id,
    username: updatedUser.username,
    name: updatedUser.name,
    email: updatedUser.email,
    createdAt: updatedUser.createdAt,
    updatedAt: updatedUser.updatedAt,
  }
}

async function deleteUser(id: string) {
  await prisma.users.delete({
    where: { id },
  })
}

const user = {
  createUser,
  updateUser,
  deleteUser,
  validationUniqueEmail,
  findUserById,
  hashedPasswordObject,
  validationUniqueUsername,
  findByEmail,
}

export default user
