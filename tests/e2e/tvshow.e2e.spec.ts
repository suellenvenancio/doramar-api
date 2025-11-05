import request from "supertest"
import app from "../../src/app"

jest.spyOn(console, "error").mockImplementation(() => {})

describe("E2E TV Show Test", () => {
  const fakeToken = "fake-firebase-token"

  describe("GET /tvshows", () => {
    it("should return 200 and an empty list of TV shows", async () => {
      const response = await request(app)
        .get("/tvshows")
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(200)
      expect(Array.isArray(response.body.data)).toBe(true)
      expect(response.body.data.length).toBe(0)
    })

    it("should return 200 and a list of TV shows", async () => {
      await request(app)
        .post("/tvshows")
        .send({
          title: "Test TV Show",
          synopsis: "This is a test TV show.",
          cast: "Actor A, Actor B",
          poster: "http://example.com/poster.jpg",
          premiereDate: new Date("2024-01-01").toISOString(),
          originalName: "Original Test TV Show",
          createdAt: new Date().toISOString(),
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const response = await request(app)
        .get("/tvshows")
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(200)
      expect(Array.isArray(response.body.data)).toBe(true)
      expect(response.body.data.length).toBeGreaterThan(0)
    })
  })
})
