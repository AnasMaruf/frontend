import axios from "axios";

const register = async (data) => {
  const response = await axios.post("http://localhost:3000/api/users", data);
  return response;
};

const login = async () => {
  const response = await axios.post("http://localhost:3000/api/users/login");
  return response;
};
export { register, login };
