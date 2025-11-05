import request from "supertest"
import app from "../../src/app"

jest.spyOn(console, "error").mockImplementation(() => {})

describe("E2E UserTest", () => {
  const fakeToken = "fake-firebase-token"

  describe("POST /users", () => {
    it("should return 201 on user creation", async () => {
      const response = await request(app)
        .post("/users")
        .send({
          email: "testuser@example.com",
          password: "password",
          name: "Test User",
          username: "testuser",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(201)
      expect(response.body.message).toEqual("User registered successfully")
    })

    it("should return 500 on user creation with existing email", async () => {
      const duplicateResponse = await request(app)
        .post("/users")
        .send({
          email: "testuser@example.com",
          password: "password",
          name: "Test User",
          username: "testuser",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(duplicateResponse.status).toBe(409)
      expect(duplicateResponse.body.message).toEqual("Email already in use!")
    })

    it("should return 500 on user creation with existing username", async () => {
      const duplicateResponse = await request(app)
        .post("/users")
        .send({
          email: "testusername@example.com",
          password: "password",
          name: "Test User",
          username: "testuser",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(duplicateResponse.status).toBe(409)
      expect(duplicateResponse.body.message).toEqual("Username already in use!")
    })
  })

  describe("GET /users/:id", () => {
    it("should return 200 and user data for existing user", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          email: "testmeuuser@example.com",
          password: "password",
          name: "Test User",
          username: "testmeuuser",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id

      const response = await request(app)
        .get(`/users/${userId}`)
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(200)
      expect(response.body.data).toBeDefined()
      expect(response.body.data.email).toEqual("testmeuuser@example.com")
    })

    it("should return 404 for non-existing user", async () => {
      const response = await request(app)
        .get("/users/999999")
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(404)
      expect(response.body.message).toEqual("User not found!")
    })
  })

  describe("GET /users?email=", () => {
    it("should return 200 and user data for existing email", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          email: "testemail@example.com",
          password: "password",
          name: "Test User",
          username: "testemailuser",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const response = await request(app)
        .get(`/users?email=${userResponse.body.data.email}`)
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(200)
      expect(response.body.data).toBeDefined()
      expect(response.body.data.email).toEqual("testemail@example.com")
    })

    it("should return 404 for non-existing email", async () => {
      const response = await request(app)
        .get("/users?email=nonexisting@example.com")
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(404)
      expect(response.body.message).toEqual("User not found!")
    })
  })

  describe("PATCH /users/:id", () => {
    it("should return 500 if the username is already in use", async () => {
      const user = await request(app)
        .post("/users")
        .send({
          email: "teste2@example.com",
          password: "password",
          name: "Test User",
          username: "teste2",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = user.body.data.id

      const updateUser = await request(app)
        .patch(`/users/${userId}`)
        .send({
          username: "testemailuser",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(updateUser.status).toBe(409)
      expect(updateUser.body.message).toEqual("Username already in use!")
    })

    it("should return 409 if the email is already in use", async () => {
      const user = await request(app)
        .post("/users")
        .send({
          email: "teste@example.com",
          password: "password",
          name: "Test User",
          username: "teste",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = user.body.data.id

      const updateUser = await request(app)
        .patch(`/users/${userId}`)
        .send({
          email: "testmeuuser@example.com",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(updateUser.status).toBe(409)
      expect(updateUser.body.message).toEqual("Email already in use!")
    })
    it("should return 404 for non-existing user", async () => {
      const response = await request(app)
        .patch("/users/999999")
        .send({ name: "Updated Name" })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(404)
      expect(response.body.message).toEqual("User not found!")
    })

    it("should return 200 and updated user data", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          email: "testupdate@example.com",
          password: "password",
          name: "Test User",
          username: "testupdateuser",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id

      const response = await request(app)
        .patch(`/users/${userId}`)
        .send({ name: "Updated Name" })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(200)
      expect(response.body.data).toBeDefined()
      expect(response.body.data.name).toEqual("Updated Name")
    })
  })

  describe("DELETE /users/:id", () => {
    it("should return 404 for non-existing user", async () => {
      const response = await request(app)
        .delete("/users/999999")
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(404)
      expect(response.body.message).toEqual("User not found!")
    })

    it("should return 200 and delete the user", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          email: "testdelete@example.com",
          password: "password",
          name: "Test User",
          username: "testdeleteuser",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id

      const response = await request(app)
        .delete(`/users/${userId}`)
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(200)
      expect(response.body.message).toEqual("User deleted successfully!")
    })
  })
})
