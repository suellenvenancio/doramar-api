import user from "../repository/user"
import { RegisterUserInput, User } from "../types"

async function getUserByEmail(email: string) {
  return await user.validateEmail(email)
}

async function getUserById(id: string) {
  const foundedUser = await user.findUserById(id)

  return {
    id,
    username: foundedUser.username,
    name: foundedUser.name,
    email: foundedUser.email,
    createdAt: foundedUser.createdAt,
    updatedAt: foundedUser.updatedAt,
  }
}

async function createUser(data: RegisterUserInput) {
  try {
    await user.validationUniqueEmail(data.email)
    await user.validationUniqueUsername(data.username)
    const newUser = await user.hashedPasswordObject(data)

    return user.createUser(newUser)
  } catch (error) {
    console.error("Error creating user:", error)
    throw error
  }
}

async function updateUser(
  id: string,
  data: Partial<Omit<User, "id" | "createdAt">>
) {
  try {
    if (data.email) {
      await user.validationUniqueEmail(data.email)
      await user.validationUniqueUsername(data.email)
    }

    return user.updateUser(id, data)
  } catch (error) {
    console.error("Error updating user:", error)
    throw error
  }
}

async function deleteUser(id: string) {
  try {
    await user.findUserById(id)

    await user.deleteUser(id)
  } catch (error) {
    console.error("Error deleting user:", error)
    throw error
  }
}

const userService = {
  getUserByEmail,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
}

export default userService
