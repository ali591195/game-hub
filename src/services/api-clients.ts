import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "29576083e5de4be8938a46d9e106e7b6",
  },
});
