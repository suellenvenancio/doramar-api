import { prisma } from "../lib/prisma"
import { AppError } from "../utils/errors"
import { RegisterUserInput, User } from "../types"
import password from "./password"
import { ca } from "zod/v4/locales"

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
  try {
    return await prisma.users.create({
      data: {
        ...data,
      },
    })
  } catch (error) {
    console.error("Error creating user:", error)
    throw new Error("Could not create user!")
  }
}

async function updateUser(
  id: string,
  data: Partial<Omit<User, "id" | "createdAt">>
) {
  try {
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
  } catch (error) {
    console.error("Error updating user:", error)
    throw new Error("Could not update user!")
  }
}

async function deleteUser(id: string) {
  try {
    await prisma.users.delete({
      where: { id },
    })
  } catch (error) {
    console.error("Error deleting user:", error)
    throw new Error("Could not delete user!")
  }
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
