import axios from "axios";

const base_url = "http://localhost:8080";

const get = async (url) => {
  return await axios.get(`${base_url}${url}`);
};

const post = async (url) => {
  return await axios.post(`${base_url}${url}`);
};

export { base_url, get, post };
