import { getAuth } from "firebase-admin/auth"

jest.mock("firebase-admin/auth", () => {
  return {
    getAuth: jest.fn().mockReturnValue({
      verifyIdToken: jest.fn().mockResolvedValue({ uid: "test-user" }),
    }),
  }
})
