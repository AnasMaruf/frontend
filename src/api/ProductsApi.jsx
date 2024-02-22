import axios from "axios";

// const axiosJWT = axios.create();

const fetch = async (token) => {
  const response = await axios.get("http://localhost:3000/api/products", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export default { fetch };
