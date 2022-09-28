import React from 'react'
import Home from './Home'
import Contactus  from "./contactus";
import Blog from './Blog';
import BlogSingle from './BlogSingle';
import Errorfile from './errorfile';
import Shop from './Shop';
import ProductDetails from './ProductDetails';
import Checkout from './Checkout';
import Cart from './Cart';
import Login from './Login';
import {BrowserRouter as Router,  Route , Routes , Switch}  from 'react-router-dom'


export default function RouterPage() {
  return (
    <div>
        <Router>
           { <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/contactus" element = {<Contactus />}  />
                <Route path="/Blog" element ={<Blog />} />
                <Route path="/BlogSingle" element ={<BlogSingle />} />
                <Route path="/errorfile" element ={<Errorfile />} />
                <Route path="/Shop" element ={<Shop />} />
                <Route path="/ProductDetails" element ={<ProductDetails />} />
                <Route path="/Checkout" element ={<Checkout />} />
                <Route path="/Cart" element ={<Cart />} />
                <Route path="/Login" element ={<Login />} />
            </Routes> }

           
        </Router>
    </div>
   
  )
}
