const { _instance } = require("../../utils/http");
const axiosMockAdapter = require("axios-mock-adapter");
const jwt = require("jsonwebtoken");
const mock = new axiosMockAdapter(_instance);

const setupGoogleSuccesResponse = (sub) => {
  const token = jwt.sign({ sub }, "Shhh");
  mock
    .onPost("https://oauth2.googleapis.com/token")
    .replyOnce(200, { id_token: token });
};

const setupGoogleErrorResponse = (sub) => {
  mock.onPost("https://oauth2.googleapis.com/token").replyOnce(401);
};

module.exports = { setupGoogleSuccesResponse, setupGoogleErrorResponse };
