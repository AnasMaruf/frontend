const fetcher = async () => {
  const response = await axios.get("http://localhost:3000/api/products");
  return response;
};

export default { fetcher };
