import React from "react";
import { Link } from "react-router-dom";

export const Table = (props) => {

  const handleFav = (newFav) => {
    const existingFavs = JSON.parse(localStorage.getItem('favItems')) || [];
    const updatedFavs = [...existingFavs, newFav];
    localStorage.setItem('favItems', JSON.stringify(updatedFavs));
  }

  return (
    <div id={props.id}>
      <div className="relative overflow-x-auto">
        <table className="w-screen text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Symbol
              </th>
              <th scope="col" className="px-6 py-3">
                Logo
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {props.datasource.map((data) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <td>
                    <button
                      onClick={() => handleFav(data)}
                      type="button"
                      class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                    >
                      Fav
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    {/* <a href="url">NAME</a> */}
                    <Link className="font-bold" to={`/cryptopage/${data.id}`}>
                      {data.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4">{data.symbol}</td>
                  <td className="px-6 py-4">
                    <img width={50} src={data.image} alt="" />
                  </td>
                  <td className="px-6 py-4">$ {data.current_price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
// testing
