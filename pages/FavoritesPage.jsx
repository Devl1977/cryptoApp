import React, { useEffect, useState } from 'react'
import { Table } from '../components/Table'

export const FavoritesPage = () => {

  const [favData, setFavData ] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favItems'));
    setFavData(data);
  }, []);

  if (favData.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <Table datasource={favData} />
  )
}
// testing