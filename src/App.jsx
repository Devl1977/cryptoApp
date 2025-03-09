import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { CryptoPage } from './pages/CryptoPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { FavoritesPage } from './pages/FavoritesPage'

function App() {


  // PATH PARAM VS QUERY PARAM
  // facebook.com/profiles/prabh/123.jpeg/404

  // QUERY PARAM
  // facebook.com/profiles?userId=prabh&photoNum=123.jpeg
  // key1 = userId, value 1 = prabh
  // key2 = photoNum, value 2= 123.jpeg

  // Navigate from one page to another by clicking any crypto currency (DONE)
  // Crypto app which fetches crypto data from somewhere!
  // Then it shows it in a table\

  // Browser you searchefd for /axsxs
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cryptopage/:coin' element={<CryptoPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='*' element={<NotFoundPage /> } />
      </Routes>
    </>
  )
}

export default App
