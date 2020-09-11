import axios from "axios";

class API {
  axiosInstance = null;

  constructor() {
    /* 
      🚨1 point EXTRA CREDIT 🚨 👉🏿 get the baseURL from the environment
      https://create-react-app.dev/docs/adding-custom-environment-variables/
    */
    const axiosInstance = axios.create({
      baseURL: "https://kwitter-api.herokuapp.com/",
      timeout: 30000,
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    // Add a request interceptor to attach a
    axiosInstance.interceptors.request.use(
      (config) => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      ({ data }) => data,
      (error) => Promise.reject(error)
    );

    this.axiosInstance = axiosInstance;
  }

  async login({ username, password }) {
    try {
      const result = await this.axiosInstance.post("/auth/login", {
        username,
        password,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async deleteUser(username) {
    try {
      console.log(username);
      const result = await this.axiosInstance.delete(`/users/${username}`);
      return result;
    } catch (err) {
      helpMeInstructor(err);
    }
  }

  // async getUser (username) {
  //   try {
  //     const result = await this.axiosInstance.get("/users/${username}",)
  //     return result;
  //   } catch (err) {
  //     helpMeInstructor(err);
  // }
  // }

  async logout() {
    try {
      await this.axiosInstance.get("/auth/logout");
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async getUsers() {
    try {
      const result = await this.axiosInstance.get("/users?limit=500&offset=0");

      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async searchUsers(username) {
    try {
      const result = await this.axiosInstance.get("/users/" + username);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }
  async createMessage(text) {
    try {
      let info = await this.axiosInstance.post("/messages", { text: text });
      return info;
    } catch (err) {
      console.log({ err });
      helpMeInstructor(err);
      return err;
    }
  }
  async createUser({ username, displayName, password }) {
    // if (confirmPassword !== password){
    //   console.log("they do not match")
    // }
    try {
      // console.log(username, displayName, password)
      const result = await this.axiosInstance.post("/users", {
        username,
        displayName,
        password,
      });
      console.log({ result });
      return `${result.user.username} created`;
    } catch (error) {
      console.log({ error });
      return error.response.data.message;
      // throw error
    }
  }

  async setPic(username, pictureData) {
    try {
      const result = await this.axiosInstance.put(
        `/users/${username}/picture`,
        pictureData
      );
      // console.log({result})
      return result;
    } catch (error) {
      // console.log({error})
      helpMeInstructor(error);
      return error;
    }
  }

  async getCurrentPic(username) {
    try {
      const result = await this.axiosInstance.get(`/users/${username}/picture`);
      return result;
    } catch (error) {
      helpMeInstructor(error);
      return error;
    }
  }

  async getMessages() {
    try {
      const result = await this.axiosInstance.get("/messages");
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }
  async googleLogin() {
    try {
      // const result = this.axiosInstance.get("/auth/google/login")
      // const result = this.axiosInstance.get("/auth/google/callback")
      // console.log({result})
    } catch (error) {
      console.log({ error });
    }
  }

  async likeMessage(messageId) {
    try {
      console.log(messageId)
      let info = await this.axiosInstance.post("/likes", {
        messageId:messageId,
      });
      return info;
    } catch (err) {
      console.log({ err });
      helpMeInstructor(err);
      return err;
    }
  }

  async unlikeMessage(likeId) {
    try {
      let info = await this.axiosInstance.delete("/likes/"+likeId,
      );
      return info;
    } catch (err) {
      console.log({ err });
      helpMeInstructor(err);
      return err;
    }
  }
}

// WARNING.. do not touch below this line if you want to have a good day =]

function helpMeInstructor(err) {
  console.info(
    `
    Did you hit CORRECT the endpoint?
    Did you send the CORRECT data?
    Did you make the CORRECT kind of request [GET/POST/PATCH/DELETE]?
    Check the Kwitter docs 👉🏿 https://kwitter-api.herokuapp.com/docs/#/
    Check the Axios docs 👉🏿 https://github.com/axios/axios
    TODO: troll students
  `,
    err
  );
}

function getToken() {
  try {
    const storedState = JSON.parse(localStorage.getItem("persist:root"));
    return JSON.parse(storedState.auth).isAuthenticated;
  } catch {
    return "";
  }
}

export default new API();
