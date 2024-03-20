import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Checkout from './Checkout'
import { CartProvider } from 'react-use-cart'

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = { <Home /> }></Route>
            <Route path='/cart' element = { <Cart /> }></Route>
            <Route path='/checkout' element = { <Checkout /> }></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App