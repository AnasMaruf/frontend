import axios from "axios";

const register = async (data) => {
  const response = await axios.post("http://localhost:3000/api/users", data);
  return response;
};

const login = async (data) => {
  const response = await axios.post(
    "http://localhost:3000/api/users/login",
    data
  );
  return response;
};

const logout = async () => {
  const response = await axios.delete("http://localhost:3000/api/users/logout");
  return response;
};
export { register, login, logout };
