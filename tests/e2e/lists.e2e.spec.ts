import request from "supertest"
import app from "../../src/app"

jest.spyOn(console, "error").mockImplementation(() => {})

describe("E2E List Test", () => {
  const fakeToken = "fake-firebase-token"
  describe("POST /lists", () => {
    it("should return 200 and the user's lists", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          email: "testlist@example.com",
          password: "password",
          name: "Test User by list",
          username: "testmeuuserlist",
        })
        .set("Authorization", `Bearer ${fakeToken}`)
      const userId = userResponse.body.data.id

      const listResponse = await request(app)
        .post("/lists")
        .send({
          name: "List User",
          userId,
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(listResponse.status).toBe(201)
      expect(listResponse.body.message).toEqual("List created successfully!")
      expect(listResponse.body.data).toHaveProperty("id")
    })

    it("should return 200 and the user's lists", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          email: "testlist2@example.com",
          password: "password",
          name: "Test User by list test",
          username: "testmeuuserlist2",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id
      const listResponse = await request(app)
        .post("/lists")
        .send({
          name: "List User",
          userId,
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(listResponse.status).toBe(201)
      expect(listResponse.body.message).toEqual("List created successfully!")
      expect(listResponse.body.data).toHaveProperty("id")

      const listResponse2 = await request(app)
        .post("/lists")
        .send({
          name: "List User",
          userId,
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(listResponse2.status).toBe(400)
      expect(listResponse2.body.message).toEqual(
        "List with this name already exists for the user!"
      )
    })
  })

  describe("POST lists/:listId/tvShow/:tvShowId", () => {
    it("should return 404 when the list does not exist", async () => {
      const response = await request(app)
        .post("/lists/nonexistent-list-id/tvShow/some-tv-show-id")
        .send({ userId: "some-user-id" })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(404)
      expect(response.body.message).toEqual("List does not exist!")
    })

    it("should return 403 when the user does not own the list", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          email: "testlist3@example.com",
          password: "password",
          name: "Test User by list test 3",
          username: "testmeuuserlist3",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id

      const listResponse = await request(app)
        .post("/lists")
        .send({
          name: "List User 3",
          userId,
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const listId = listResponse.body.data.id

      const addTvShowOnTheList = await request(app)
        .post(`/lists/${listId}/tvShow/some-tv-show-id`)
        .send({ userId: "different-user-id" })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(addTvShowOnTheList.status).toBe(403)
      expect(addTvShowOnTheList.body.message).toEqual(
        "You do not have permission to modify this list!"
      )
    })

    it("should return 404 when the tv show does not exist", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          email: "testlist4@example.com",
          password: "password",
          name: "Test User by list test 3",
          username: "testmeuuserlist4",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id

      const listResponse = await request(app)
        .post("/lists")
        .send({
          name: "List User 3",
          userId,
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const listId = listResponse.body.data.id

      const addTvShowOnTheList = await request(app)
        .post(`/lists/${listId}/tvShow/some-tv-show-id`)
        .send({ userId })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(addTvShowOnTheList.status).toBe(404)
      expect(addTvShowOnTheList.body.message).toEqual("TV Show does not exist!")
    })

    it("should add a tv show to the list successfully", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          email: "testlist5@example.com",
          password: "password",
          name: "Test User by list test 5",
          username: "testmeuuserlist5",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id

      const listResponse = await request(app)
        .post("/lists")
        .send({
          name: "List User 5",
          userId,
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const listId = listResponse.body.data.id

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
      const addTvShowOnTheList = await request(app)
        .post(`/lists/${listId}/tvShow/${tvShowId}`)
        .send({ userId })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(addTvShowOnTheList.status).toBe(200)
      expect(addTvShowOnTheList.body.message).toEqual(
        "TV Show Successfully added to the list"
      )
      expect(addTvShowOnTheList.body.data).toHaveProperty("id")
    })

    it("should return 400 when the TV Show already exists in the list", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          email: "testlist6@example.com",
          password: "password",
          name: "Test User by list test 6",
          username: "testmeuuserlist6",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id

      const listResponse = await request(app)
        .post("/lists")
        .send({
          name: "List User 6",
          userId,
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const listId = listResponse.body.data.id

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
      const addTvShowOnTheList = await request(app)
        .post(`/lists/${listId}/tvShow/${tvShowId}`)
        .send({ userId })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(addTvShowOnTheList.status).toBe(200)
      expect(addTvShowOnTheList.body.message).toEqual(
        "TV Show Successfully added to the list"
      )
      expect(addTvShowOnTheList.body.data).toHaveProperty("id")

      const addTvShowOnTheListAgain = await request(app)
        .post(`/lists/${listId}/tvShow/${tvShowId}`)
        .send({ userId })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(addTvShowOnTheListAgain.status).toBe(400)
      expect(addTvShowOnTheListAgain.body.message).toEqual(
        "The TV Show already exists in this list!"
      )
    })
  })

  describe("GET /lists/user/:userId", () => {
    it("should return 200 and the user's lists", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          email: "testlist7@example.com",
          password: "password",
          name: "Test User by list test 7",
          username: "testmeuuserlist7",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id

      const listResponse = await request(app)
        .post("/lists")
        .send({
          name: "List User 7",
          userId,
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(listResponse.status).toBe(201)
      expect(listResponse.body.message).toEqual("List created successfully!")
      expect(listResponse.body.data).toHaveProperty("id")

      const getListsResponse = await request(app)
        .get(`/lists/user/${userId}`)
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(getListsResponse.status).toBe(200)
      expect(getListsResponse.body.message).toEqual(
        "Lists retrieved successfully"
      )
      expect(Array.isArray(getListsResponse.body.data)).toBe(true)
      expect(getListsResponse.body.data.length).toBeGreaterThan(0)
    })

    it("should return 200 and the user should has no lists", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          email: "testlist9@example.com",
          password: "password",
          name: "Test User by list test 9",
          username: "testmeuuserlist9",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id

      const getListsResponse = await request(app)
        .get(`/lists/user/${userId}`)
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(getListsResponse.status).toBe(200)
      expect(getListsResponse.body.message).toEqual(
        "Lists retrieved successfully"
      )
      expect(Array.isArray(getListsResponse.body.data)).toBe(true)
      expect(getListsResponse.body.data.length).toBe(0)
    })
  })

  describe("GET /lists/user?email= - no lists", () => {
    it("should return 200 and an array with at least one item", async () => {
      const getListsResponse = await request(app)
        .get(`/lists/user?email=testlist@example.com`)
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(getListsResponse.status).toBe(200)
      expect(getListsResponse.body.message).toEqual(
        "Lists retrieved successfully"
      )
      expect(Array.isArray(getListsResponse.body.data)).toBe(true)
      expect(getListsResponse.body.data.length).toBeGreaterThan(0)
    })

    it("should return 200 and an empty array when the user has no lists", async () => {
      await request(app)
        .post("/users")
        .send({
          email: "testlist8@example.com",
          password: "password",
          name: "Test User by list test 8",
          username: "testmeuuserlist8",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const getListsResponse = await request(app)
        .get(`/lists/user?email=testlist8@example.com`)
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(getListsResponse.status).toBe(200)
      expect(getListsResponse.body.message).toEqual(
        "Lists retrieved successfully"
      )
      expect(Array.isArray(getListsResponse.body.data)).toBe(true)
      expect(getListsResponse.body.data.length).toBe(0)
    })
  })
  describe("PATCH /lists/:listId", () => {
    it("should return 404 when the list does not exist", async () => {
      const response = await request(app)
        .patch("/lists/nonexistent-list-id")
        .send({ order: 1, tvShowId: "some-tv-show-id", userId: "some-user-id" })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(404)
      expect(response.body.message).toEqual(
        "List does not exist or you do not have permission to modify this list!"
      )
    })

    it("should return 400 when the list has no items to reorder", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          email: "testuser@example.com",
          password: "password",
          name: "Test User",
          username: "testuserforpatch",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id

      const listResponse = await request(app)
        .post("/lists")
        .send({
          name: "List for patch test",
          userId,
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const listId = listResponse.body.data.id

      const response = await request(app)
        .patch(`/lists/${listId}`)
        .send({ order: 1, tvShowId: "some-tv-show-id", userId })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(400)
      expect(response.body.message).toEqual(
        "This list has no items to reorder!"
      )
    })

    it("should return 404 when the tv show is not found in the list", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          email: "testuserfortvshow1@example.com",
          password: "password",
          name: "Test User",
          username: "testuserfortvshow1",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id

      const listResponse = await request(app)
        .post("/lists")
        .send({
          name: "List for TV Show Test",
          userId,
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const listId = listResponse.body.data.id

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

      const addTvShowOnTheList = await request(app)
        .post(`/lists/${listId}/tvShow/${tvShowId}`)
        .send({ userId })
        .set("Authorization", `Bearer ${fakeToken}`)

      const response = await request(app)
        .patch(`/lists/${listId}`)
        .send({ order: 1, tvShowId: "nonexistent-tv-show-id", userId })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(response.status).toBe(404)
      expect(response.body.message).toEqual("TV Show not found in the list!")
    })

    it("should return 200 when the the list is updated successfully", async () => {
      const userResponse = await request(app)
        .post("/users")
        .send({
          email: "testuserfortvshow2`@example.com",
          password: "password",
          name: "Test User",
          username: "testuserfortvshow2",
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const userId = userResponse.body.data.id

      const listResponse = await request(app)
        .post("/lists")
        .send({
          name: "List for TV Show Tests2",
          userId,
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const listId = listResponse.body.data.id

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

      const tvShowResponse2 = await request(app)
        .post("/tvshows")
        .send({
          title: "Test TV Show2",
          synopsis: "This is a test TV show.",
          cast: "Actor A, Actor B",
          poster: "http://example.com/poster.jpg",
          premiereDate: new Date("2024-01-01").toISOString(),
          originalName: "Original Test TV Show",
          createdAt: new Date().toISOString(),
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const tvShowResponse3 = await request(app)
        .post("/tvshows")
        .send({
          title: "Test TV Show3",
          synopsis: "This is a test TV show.",
          cast: "Actor A, Actor B",
          poster: "http://example.com/poster.jpg",
          premiereDate: new Date("2024-01-01").toISOString(),
          originalName: "Original Test TV Show",
          createdAt: new Date().toISOString(),
        })
        .set("Authorization", `Bearer ${fakeToken}`)

      const tvShowId = tvShowResponse.body.data.id
      const tvShowId2 = tvShowResponse2.body.data.id
      const tvShowId3 = tvShowResponse3.body.data.id

      const addTvShowOnTheList = await request(app)
        .post(`/lists/${listId}/tvShow/${tvShowId}`)
        .send({ userId })
        .set("Authorization", `Bearer ${fakeToken}`)

      const addTvShowOnTheList2 = await request(app)
        .post(`/lists/${listId}/tvShow/${tvShowId2}`)
        .send({ userId })
        .set("Authorization", `Bearer ${fakeToken}`)

      const addTvShowOnTheList3 = await request(app)
        .post(`/lists/${listId}/tvShow/${tvShowId3}`)
        .send({ userId })
        .set("Authorization", `Bearer ${fakeToken}`)

      expect(addTvShowOnTheList.status).toBe(200)
      expect(addTvShowOnTheList2.status).toBe(200)
      expect(addTvShowOnTheList3.status).toBe(200)

      const response = await request(app)
        .patch(`/lists/${listId}`)
        .send({ order: 1, tvShowId: tvShowId2, userId })
        .set("Authorization", `Bearer ${fakeToken}`)

      const itemOrder = response.body.data.tvShows.find(
        (t: any) => t.id === tvShowId2
      ).order
      const order2 = response.body.data.tvShows.find(
        (t: any) => t.id === tvShowId
      ).order
      const order3 = response.body.data.tvShows.find(
        (t: any) => t.id === tvShowId3
      ).order

      expect(response.status).toBe(201)
      expect(response.body.message).toEqual("List order updated successfully")
      expect(itemOrder).toBe(1)
      expect(order2).toBe(2)
      expect(order3).toBe(3)
    })
  })
})
