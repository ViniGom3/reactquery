import axios from "axios";

export const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = {
  user: {
    signUp: async (data) => await http.post("/user/signup", data),
    auth: async (data) => await http.post("/user/", data),
    refresh: async () => {
      const id = localStorage.getItem("_id");
      return await http.get(`/user/${id}`);
    },
  },
};
