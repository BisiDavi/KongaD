import axios from "axios";

const apiURL = "http://localhost:4000";

const client = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const fetchData = () => {
  return client.get("/products");
};
