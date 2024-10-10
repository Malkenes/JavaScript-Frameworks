import Layout from './components/layout/layout.jsx'
import Contact from './pages/contact.jsx'
import Checkout from './pages/checkout.jsx'
import IndexPage from './pages/index.jsx'
import Product from './pages/product.jsx'
import CheckoutSuccess from './pages/checkoutSuccess.jsx'
import PageNotFound from './pages/pageNotFound.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import ScrollToTop from './components/layout/scrollToTop.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='contact' element={<Contact />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='checkoutSuccess' element={<CheckoutSuccess />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
