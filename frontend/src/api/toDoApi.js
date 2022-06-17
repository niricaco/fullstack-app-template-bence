import http from "axios";

export const toDoApi = () => {
  const instance = http.create({
    baseURL: "http://localhost:8080/api",
    timeout: 3000,
  });

  const post = async (path, data) => {
    try {
      const response = await instance.post(path, data, {
        headers: {
          authorization: localStorage.getItem("sessionToken"),
        },
      });
      return response;
    } catch (err) {
      return err.response;
    }
  };

  const get = async (path, data) => {
    try {
      const response = await instance.get(path, data, {
        headers: {
          authorization: localStorage.getItem("sessionToken"),
        },
      });
      return response;
    } catch (error) {
      if (!error.response) return error;
      return error.response;
    }
  };
  return { post, get };
};
