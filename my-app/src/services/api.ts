import axios from "axios";

export const api = axios.create({
  baseURL: "https://tabacaria-agni-api.onrender.com",
  timeout: 5000
})