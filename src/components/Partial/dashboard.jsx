import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import useSWR from "swr";
import ProductsApi from "../../api/ProductsApi";

function Dashboard(config) {
  const fetcher = async () => {
    try {
      const response = await ProductsApi.fetcher();
      localStorage.setItem("Authorization", config);
      return response;
    } catch (error) {
      console.log(error.response);
    }
  };
  const { data } = useSWR("products", fetcher);
  if (!data) return <h2>Loading...</h2>;
  return (
    <>
      <Navbar />
      <div className="mx-14 mt-4">
        <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Add Product
        </Link>

        <div class="relative overflow-x-auto mt-8">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  No
                </th>
                <th scope="col" class="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, index) => {
                return (
                  <tr
                    key={product.id}
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td class="px-6 py-4">{product.name}</td>
                    <td class="px-6 py-4">{product.price}</td>
                    <td class="px-6 py-4">
                      <Link className="font-medium px-3 py-1 rounded text-white mr-1 bg-blue-400">
                        Update
                      </Link>
                      <button className="font-medium px-3 py-1 rounded text-white mr-1 bg-red-400">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
