import { useState } from 'react'
import Layout from './components/layout.jsx'
import Contact from './pages/contact.jsx'
import Checkout from './pages/checkout.jsx'
import IndexPage from './pages/index.jsx'
import Product from './pages/product.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='contact' element={<Contact />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
