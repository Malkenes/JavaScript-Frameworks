import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Contact from './pages/contact.jsx'
import Checkout from './pages/checkout.jsx'
import IndexPage from './pages/index.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header count={count} />
      <IndexPage />
      <Contact />
      <Checkout />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer></Footer>
    </>
  )
}

export default App
