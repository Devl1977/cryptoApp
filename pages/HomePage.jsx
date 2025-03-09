import React, { useEffect, useState } from "react";
import { Table } from "../components/Table";
import { Link } from "react-router-dom";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets/?vs_currency=cad";

// We need to call CoinGecko API
export const HomePage = () => {
  const [cryptoData, setCryptoData] = useState([]);

  const getCryptoData = async () => {
    const data = await fetch(API_URL);
    const dataInJson = await data.json();
    setCryptoData(dataInJson);
  };

  useEffect(() => {
    // We will call api here!
    getCryptoData();
  }, []);

  return (
    <div>
      <div className="flex gap-8 items-center">
        <h1 class="mb-4 p-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Crypto Currency Table
        </h1>
        <Link to="/favorites">Check Favorites</Link>
      </div>
      <Table id="crypto" datasource={cryptoData} />
    </div>
  );
};