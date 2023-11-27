import Shoes from "../img/Shoes.jpg"
import { MdDelete } from "react-icons/md";
export default function ProductsCard({product}) {
    
   const {name,price,img} = product;
   function handleClick(id){
        console.log(id)
   }
  return (
    <div>
        <div className=" max-w-7xl flex justify-between mx-auto items-center border p-4 rounded-t-sm my-10 shadow-md dark:border-gray-600 dark:text-gray-300 dark:rounded-lg">
            <div>
                <img className="w-48 rounded-lg" src={img} alt={name} />
            </div>
            <div>
                <h1 className=" text-xl font-bold ">{name}</h1>
            </div>
            <div>
                <span className="text-xl font-bold">${price}</span>
            </div>
            <div className="text-4xl text-red-900">
                <button><MdDelete onClick={handleClick}/></button>
            </div>
        </div>
    </div>
  )
}
