require("dotenv").config();
const mockserver = require("supertest");
const jwt = require("jsonwebtoken");
const app = require("../app");
const User = require("../models/user");
const { startDb, stopDb, deleteAll } = require("./util/inMemoryDb");
const {
  setupGoogleSuccesResponse,
  setupGoogleErrorResponse,
} = require("./util/httpMock");

describe("/api/user/login POST tests", () => {
  let connection;
  let mongod;
  let client;

  beforeAll(async () => {
    [connection, mongod] = await startDb();
    client = mockserver.agent(app);
  });

  afterEach(async () => {
    await deleteAll(User);
  });

  afterAll(async () => {
    await stopDb(connection, mongod);
  });

  test("should return 400 without body (user not created)", async () => {
    //given

    //when
    const response = await client.post("/api/user/login");

    //then
    expect(response.status).toBe(400);
  });

  test("should return 400 without provider data (user not created)", async () => {
    //given
    const code = "random";

    //when
    const response = await client.post("/api/user/login").send({
      code,
    });

    //then
    expect(response.status).toBe(400);
  });

  test("should return 400 without code data (user not created)", async () => {
    //given
    const provider = "github";

    //when
    const response = await client.post("/api/user/login").send({
      provider,
    });

    //then
    expect(response.status).toBe(400);
  });

  test("should return 400 with invalid provider data (user not created)", async () => {
    //given
    const code = "random";
    const provider = "facsebook";

    //when
    const response = await client.post("/api/user/login").send({
      code,
      provider,
    });

    //then
    expect(response.status).toBe(400);
  });

  test("should return 200 with JWT with valid provider (user not created)", async () => {
    //given
    const code = "random";
    const provider = "google";
    const googleUserId = "12345whegf43tu8i";
    setupGoogleSuccesResponse(googleUserId);

    //when
    const response = await client.post("/api/user/login").send({
      code,
      provider,
    });

    //then
    expect(response.status).toBe(200);
    const responseToken = jwt.decode(response.body.sessionToken);
    expect(responseToken.providers.google).toBe(googleUserId);
    const users = await User.find();
    expect(users).toHaveLength(0);
  });

  test("should return 401 with invalid code (user not created)", async () => {
    //given
    const code = "random";
    const provider = "google";
    setupGoogleErrorResponse();

    //when
    const response = await client.post("/api/user/login").send({
      code,
      provider,
    });

    //then
    expect(response.status).toBe(401);
    expect(response.body).toStrictEqual({});
    const users = await User.find();
    expect(users).toHaveLength(0);
  });
});
