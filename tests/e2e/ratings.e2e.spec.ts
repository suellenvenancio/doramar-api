import request from "supertest"
import app from "../../src/app"

jest.spyOn(console, "error").mockImplementation(() => {})

describe("E2E Ratings Test", () => {
  const fakeToken = "fake-firebase-token"

  beforeAll(async () => {
    await request(app)
      .post("/ratings/scale")
      .send({
        id: 1,
        label: "Péssimo",
      })
      .set("Authorization", `Bearer ${fakeToken}`)

    await request(app)
      .post("/ratings/scale")
      .send({
        id: 2,
        label: "Entediante",
      })
      .set("Authorization", `Bearer ${fakeToken}`)

    await request(app)
      .post("/ratings/scale")
      .send({
        id: 3,
        label: "Mediano",
      })
      .set("Authorization", `Bearer ${fakeToken}`)

    await request(app)
      .post("/ratings/scale")
      .send({
        id: 4,
        label: "Muito bom",
      })
      .set("Authorization", `Bearer ${fakeToken}`)

    await request(app)
      .post("/ratings/scale")
      .send({
        id: 5,
        label: "Amei",
      })
      .set("Authorization", `Bearer ${fakeToken}`)
  })
  describe("POST /ratings", () => {
    it("should return 400 if the tvShowId is invalid", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          username: "testuserrating",
          email: "testuserrating@example.com",
          password: "password123",
          name: "Test User",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id

      const response = await request(app)
        .post("/ratings")
        .send({
          userId,
          tvShowId: "invalid-tvshow-id",
          scaleId: 5,
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(404)
      expect(response.body.message).toEqual("TV Show not found!")
    })

    it("should return 200 and the created rating", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          username: "testuserrating1",
          email: "testuserrating1@example.com",
          password: "password123",
          name: "Test User",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id

      const tvShowResponse = await request(app)
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

      const tvShowId = tvShowResponse.body.data.id

      const response = await request(app)
        .post("/ratings")
        .send({
          userId,
          tvShowId,
          scaleId: 5,
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(201)
      expect(response.body.message).toEqual("Rating created successfully!")
      expect(response.body.data).toHaveProperty("id")
    })

    it("should return 201 and the created rating", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          username: "testuserrating2",
          email: "testuserrating2@example.com",
          password: "password123",
          name: "Test User",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id

      const tvShowResponse = await request(app)
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

      const tvShowId = tvShowResponse.body.data.id

      const response = await request(app)
        .post("/ratings")
        .send({
          userId,
          tvShowId,
          scaleId: 5,
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      await request(app)
        .post("/ratings")
        .send({
          userId,
          tvShowId,
          scaleId: 4,
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const ratingId = response.body.data.id
      const ratingResponse = await request(app)
        .get(`/ratings/${ratingId}`)
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(ratingResponse.status).toBe(200)
      expect(ratingResponse.body.message).toEqual("Rating fetched successfully")
      expect(ratingResponse.body.data.scaleId).toBe(4)
    })
  })

  describe("GET /ratings/user/:userId", () => {
    it("should return 200 and an empty list of ratings for a new user", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          username: "testuserrating4",
          email: "testuserrating4@example.com",
          password: "password123",
          name: "Test User",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id
      const response = await request(app)
        .get(`/ratings/user/${userId}`)
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(200)
      expect(response.body.message).toEqual("Ratings fetched successfully")
      expect(Array.isArray(response.body.data)).toBe(true)
      expect(response.body.data.length).toBe(0)
    })

    it("should return 200 and the user's ratings", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          username: "testuserrating3",
          email: "testuserrating3@example.com",
          password: "password123",
          name: "Test User",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id

      const tvShowResponse = await request(app)
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

      const tvShowId = tvShowResponse.body.data.id

      await request(app)
        .post("/ratings")
        .send({
          userId,
          tvShowId,
          scaleId: 5,
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const response = await request(app)
        .get(`/ratings/user/${userId}`)
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(200)
      expect(response.body.message).toEqual("Ratings fetched successfully")
      expect(response.body.data.length).toBeGreaterThan(0)
    })
  })

  describe("GET /ratings/scale", () => {
    it("should return 200 and the list of rating scales", async () => {
      const response = await request(app)
        .get("/ratings/scale")
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(200)
      expect(response.body.message).toEqual(
        "Rating scales fetched successfully"
      )
      expect(Array.isArray(response.body.data)).toBe(true)
      expect(response.body.data.length).toBe(5)
    })
  })
})
