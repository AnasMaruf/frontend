import axios from "axios";

const register = async (data) => {
  const response = await axios.post("/api/users", data);
  return response;
};

const login = async () => {
  const response = await axios.post("/api/users/login");
  return response;
};
export { register, login };
