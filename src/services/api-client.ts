import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7e4c87d7b38e4b1aa86629c0de84f5fe",
  },
});
