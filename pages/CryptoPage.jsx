import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Card } from '../components/Card';

const API_URL = 'https://api.coingecko.com/api/v3/coins';

export const CryptoPage = () => {
  const { coin } = useParams();
  const [coinInfo, setCoinInfo] = useState(null);

  const navigate = useNavigate();
  
  const getCoinData = async () => {
    const data = await fetch(`${API_URL}/${coin}`);
    const dataInJson = await data.json();
    setCoinInfo(dataInJson);
  }

  useEffect(() => {
    // We will call api here!
    getCoinData();
  }, [coin])

  if (coinInfo === null) {
    return <div>Loading Coin Info...</div>
  }

  const handleGoBack = () => {
    navigate('/');
  }

  return (
    <div className='flex flex-col items-start'>
      <button onClick={handleGoBack} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go Back!</button>

      <Card data={coinInfo} />
    </div>
  )
}