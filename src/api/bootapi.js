import axios from "axios";

const base_url = "https://zoheeb-cour-api.herokuapp.com";

const get = async (url) => {
  return await axios.get(`${base_url}${url}`);
};

const post = async (url) => {
  return await axios.post(`${base_url}${url}`);
};

export { base_url, get, post };
