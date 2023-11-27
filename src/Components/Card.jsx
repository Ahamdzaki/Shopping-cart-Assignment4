import Headphone from "../img/Headphonewhite.jpg"
import Shoes from "../img/Shoes.jpg"  
export default function Card({product}) {
  const {name,price,img} = product;

  
  return (
    <div className=" sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
        <div className='flex flex-wrap max-w-sm border items-center mx-10 my-4 p-2 rounded-lg shadow-lg dark:text-gray-200 dark:border-gray-600 '>
            <div className="">
              <img className="w-96 rounded-t-lg" src={img} alt={name} />
            </div>
            <div className="flex-grow">
              <h1 className="text-2xl font-bold">{name}</h1>
              <div className="flex justify-between">
                <span className=" text-2xl font-bold m-2 ">${price}</span>
                <button className="p-2 bg-blue-700 rounded-lg mx-2 text-white">Add to Cart</button>
              </div>
            </div>
        </div>
    </div>
  )
}
