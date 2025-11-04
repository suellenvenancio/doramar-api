import bcrypt from "bcryptjs"
import { AppError } from "../utils/errors"
import user from "./user"

async function validate(email: string, password: string) {
  try {
    const findedUser = await user.findByEmail(email)
    await validatePassword(password, findedUser?.password ?? "")

    return user
  } catch (error) {
    console.error("Error validating user:", error)
    if (error instanceof AppError) {
      throw new AppError("Authentication failed!", 401)
    }
    throw error
  }
}

async function validatePassword(
  providedPassword: string,
  storedPassword: string
) {
  const isMatch = await bcrypt.compare(providedPassword, storedPassword)
  if (!isMatch) {
    throw new AppError("Invalid password!", 401)
  }
  return true
}

const authentication = {
  validate,
}

export default authentication
