import axios from "../../utils/axios";

export const register = async (data) => {
  const response = await axios.post("/api/auth/register", data);

  return response;
};

export const signin = async (data) => {
  const response = await axios.post("/api/auth/login", data);

  return response;
};
