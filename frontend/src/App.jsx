import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Order from './pages/Order'
import Contact from './pages/Contact'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import{ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify';

const App = () => {
  return (
    <div className='px-4 smz:px-[5vw] md:px-[7vw] lg:px-[9w]'>
      <ToastContainer />
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path ='/' element = {<Home/>} />
        <Route path = '/Collection' element={<Collection/>} />
        <Route path = '/about' element ={<About/>} />
        <Route path = '/cart' element = {<Cart/>} />
        <Route path = '/order' element = {<Order/>} />
        <Route path = '/contact' element ={<Contact/>} />
        <Route path = '/products/:productId' element ={<Product/>} />
        <Route path = '/place-order' element={<PlaceOrder/>} />
        <Route path = '/login' element = {<Login/> } />
        <Route path = '/Verify' element = {<Verify/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
