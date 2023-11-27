import Home from "../Pages/Home"
import Products from "../Pages/Products"
import PageNotFound from "../Pages/PageNotFound"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import {Routes , Route } from "react-router-dom"

export default function Allroutes() {
  return (
    <div>
        <Header />
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element = {<Products />} />
                <Route path="*" element = {<PageNotFound />} />
            </Routes>
        
        
        <Footer />
    </div>
  )
}
