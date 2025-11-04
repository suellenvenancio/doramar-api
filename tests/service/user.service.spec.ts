import user from "../../src/repository/user"
import userService from "../../src/services/user.service"
import { AppError } from "../../src/utils/errors"

describe("User Service", () => {
  describe("updateUser", () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })
    it("should throw error when updating to an existing username", async () => {
      const mockId = "123"
      const mockUpdateData = {
        username: "existingusername",
      }
      const mockExistingUser = {
        id: mockId,
        email: "oldemail@test.com",
        username: "username",
        name: "Name",
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      jest.spyOn(user, "findUserById").mockResolvedValueOnce(mockExistingUser)
      jest
        .spyOn(user, "validationUniqueUsername")
        .mockRejectedValueOnce(new AppError("Username already in use", 409))

      await expect(
        userService.updateUser(mockId, mockUpdateData)
      ).rejects.toThrow("Username already in use")
    })

    it("should throw error when updating to an existing email", async () => {
      const mockId = "123"
      const mockUpdateData = {
        email: "existing@test.com",
      }
      const mockExistingUser = {
        id: mockId,
        email: "oldemail@test.com",
        username: "username",
        name: "Name",
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      jest.spyOn(user, "findUserById").mockResolvedValueOnce(mockExistingUser)
      jest
        .spyOn(user, "validationUniqueEmail")
        .mockRejectedValueOnce(new AppError("Email already in use", 409))

      await expect(
        userService.updateUser(mockId, mockUpdateData)
      ).rejects.toThrow("Email already in use")
    })

    it("should throw error when user not found", async () => {
      const mockId = "123"
      const mockUpdateData = {
        name: "New Name",
      }

      jest
        .spyOn(user, "findUserById")
        .mockRejectedValueOnce(new AppError("User not found", 404))

      await expect(
        userService.updateUser(mockId, mockUpdateData)
      ).rejects.toThrow("User not found")
    })

    it("should update user successfully", async () => {
      const mockId = "123"
      const mockUpdateData = {
        name: "New Name",
        username: "newusername",
      }
      const mockUpdatedUser = {
        id: mockId,
        ...mockUpdateData,
        email: "test@test.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      jest
        .spyOn(user, "findUserById")
        .mockResolvedValueOnce({ ...mockUpdatedUser, username: "oldusername" })
      jest.spyOn(user, "validationUniqueEmail").mockResolvedValueOnce(true)
      jest.spyOn(user, "validationUniqueUsername").mockResolvedValueOnce(true)
      jest.spyOn(user, "updateUser").mockResolvedValueOnce(mockUpdatedUser)

      const result = await userService.updateUser(mockId, mockUpdateData)

      expect(user.updateUser).toHaveBeenCalledWith(mockId, mockUpdateData)
      expect(result).toEqual(mockUpdatedUser)
      expect(result.username).toBe(mockUpdateData.username)
    })
  })

  describe("getUserById", () => {
    it("should throw error when user does not exist", async () => {
      const mockId = "123"

      jest
        .spyOn(user, "findUserById")
        .mockRejectedValueOnce(new AppError("User not found!", 404))

      await expect(userService.getUserById(mockId)).rejects.toThrow(
        "User not found"
      )
    })
    it("should return user data when user exists", async () => {
      const mockId = "123"
      const mockUser = {
        id: mockId,
        email: "test@test.com",
        username: "testuser",
        name: "Test User",
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      jest.spyOn(user, "findUserById").mockResolvedValueOnce(mockUser)

      const result = await userService.getUserById(mockId)

      expect(user.findUserById).toHaveBeenCalledWith(mockId)
      expect(result).toEqual(mockUser)
    })
  })

  describe("getUserByEmail", () => {
    it("should throw error when email does not exist", async () => {
      const mockEmail = "emailwithnouser@test.com"

      jest
        .spyOn(user, "findByEmail")
        .mockRejectedValueOnce(new AppError("Email not found!", 404))

      await expect(userService.getUserByEmail(mockEmail)).rejects.toThrow(
        "Email not found!"
      )
    })

    it("should return user data when email exists", async () => {
      const mockEmail = "existing@test.com"
      const mockUser = {
        id: "123",
        email: mockEmail,
        username: "testuser",
        name: "Test User",
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      jest.spyOn(user, "findByEmail").mockResolvedValueOnce(mockUser)

      const result = await userService.getUserByEmail(mockEmail)

      expect(user.findByEmail).toHaveBeenCalledWith(mockEmail)
      expect(result).toEqual(mockUser)
    })
  })

  describe("createUser", () => {
    it("should throw error when username is already in use", async () => {
      const mockUserData = {
        email: "newemail@test.com",
        username: "existingusername",
        name: "New User",
        password: "password123",
      }

      jest
        .spyOn(user, "validationUniqueUsername")
        .mockRejectedValueOnce(new AppError("Username already in use!", 409))

      await expect(userService.createUser(mockUserData)).rejects.toThrow(
        "Username already in use!"
      )
    })

    it("should throw error when email is already in use", async () => {
      const mockUserData = {
        email: "existing@test.com",
        username: "newusername",
        name: "New User",
        password: "password123",
      }

      jest.spyOn(user, "validationUniqueEmail").mockResolvedValueOnce(true)
      jest
        .spyOn(user, "validationUniqueUsername")
        .mockRejectedValueOnce(new AppError("Email already in use!", 409))

      await expect(userService.createUser(mockUserData)).rejects.toThrow(
        "Email already in use!"
      )
    })

    it("should create user successfully", async () => {
      const mockUserData = {
        email: "newuser@test.com",
        username: "newusername",
        name: "New User",
        password: "password123",
      }
      const mockCreatedUser = {
        id: "123",
        ...mockUserData,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      jest.spyOn(user, "validationUniqueEmail").mockResolvedValueOnce(true)
      jest.spyOn(user, "validationUniqueUsername").mockResolvedValueOnce(true)
      jest.spyOn(user, "hashedPasswordObject").mockResolvedValueOnce({
        ...mockUserData,
        password: "hashedpassword",
      })
      jest.spyOn(user, "createUser").mockResolvedValueOnce(mockCreatedUser)

      const result = await userService.createUser(mockUserData)

      expect(user.createUser).toHaveBeenCalled()
      expect(result).toEqual(mockCreatedUser)
    })
  })

  describe("deleteUser", () => {
    it("should throw error when user does not exist", async () => {
      const mockId = "123"

      jest
        .spyOn(user, "findUserById")
        .mockRejectedValueOnce(new AppError("User not found!", 404))

      await expect(userService.deleteUser(mockId)).rejects.toThrow(
        "User not found!"
      )
    })

    it("should delete user successfully", async () => {
      const mockId = "123"
      const mockUser = {
        id: mockId,
        email: "testuser@test.com",
        username: "testuser",
        name: "Test User",
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      jest.spyOn(user, "findUserById").mockResolvedValueOnce(mockUser)
      jest.spyOn(user, "deleteUser").mockResolvedValueOnce()

      await userService.deleteUser(mockId)

      expect(user.findUserById).toHaveBeenCalledWith(mockId)
      expect(user.deleteUser).toHaveBeenCalledWith(mockId)
    })
  })
})
