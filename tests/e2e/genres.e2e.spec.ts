import request from "supertest"
import app from "../../src/app"

jest.spyOn(console, "error").mockImplementation(() => {})

describe("E2E Genres Test", () => {
  const fakeToken = "fake-firebase-token"
  describe("GET /genres", () => {
    it("should return 200 and an empty list of genres", async () => {
      const response = await request(app)
        .get("/genres")
        .set("Authorization", `Bearer ${fakeToken}`)
      expect(response.status).toBe(200)
      expect(Array.isArray(response.body.data)).toBe(true)
      expect(response.body.data.length).toBe(0)
    })
  })
})
