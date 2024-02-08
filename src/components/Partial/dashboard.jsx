import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Dashboard() {
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
                  Id
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
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td class="px-6 py-4">Apple MacBook Pro 17"</td>
                <td class="px-6 py-4">Rp 4.500.000</td>
                <td class="px-6 py-4">
                  <Link className="mr-4">Update</Link>
                  <Link>Delete</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
