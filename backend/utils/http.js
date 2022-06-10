const { default: axios } = require("axios");

const http = () => {
  const instance = axios.create({
    baseURL: "",
    timeout: 3000,
  });

  const post = async (...params) => {
    try {
      const response = await instance.post(...params);
      return response;
    } catch (err) {
      return err.response;
    }
  };

  const get = async (...params) => {
    try {
      const response = await instance.get(...params);
      return response;
    } catch (error) {
      if (!error.response) return error;
      return error.response;
    }
  };
  return { post, get, _instance: instance };
};

module.exports = http();
