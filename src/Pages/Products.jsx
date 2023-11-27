import Headphonewhite from "../img/Headphonewhite.jpg"
import HeadponeYellow from "../img/HeadphoneYellow.jpg"
import Lab from "../img/Lab.jpg"
import Menshoes from "../img/Menshoes.jpg"
import Shoes from "../img/Shoes.jpg"
import Sunglass from "../img/Sunglass.jpg"
import SunglassBlack from "../img/SunglassBlack.jpg"
import Watch from "../img/Watch.jpg"
import WomenSHoes from "../img/WomenSHoes.jpg"
import ProductsCard from "../Components/ProductsCard"
import { useEffect } from "react"
export default function Products() {

  const products = [
    {id:1,name:"Headphone", price : 12 , img: HeadponeYellow},
    {id:2,name:"Watch", price: 25 , img: Watch},
    {id:3,name:"Shoes", price: 15 , img: Shoes},
    {id:4,name:"Sunglass", price: 8 , img: Sunglass},
    {id:5,name:"Sunglass", price: 10 , img: SunglassBlack},
    {id:6,name:"Women Shoes", price: 14 , img: WomenSHoes}
]


  useEffect (()=> {
    document.title = "Products | Shoping Cart"
  });
  return (
    <main className="bg-gray-100 dark:bg-slate-800 p-4">
      <div className="my-4">
        <h1></h1>

        {
          products.map(product => (
            <ProductsCard key={product.id} product = {product} />
          ))
        }
          
          
          
      </div>
    </main>
  )
}
