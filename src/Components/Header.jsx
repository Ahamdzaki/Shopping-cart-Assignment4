import Mooi from "../img/mooi.jpg"
import {Link,NavLink} from "react-router-dom"
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
export default function Header() {
    const [darkMode,setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode"))||false);

    useEffect (() => {
        localStorage.setItem("darkMode",JSON.stringify(darkMode))
        if(darkMode === true) {
            document.documentElement.classList.add("dark")
        }
        else {
            document.documentElement.classList.remove("dark")
        }
    },[darkMode])

    function handleClick(){
        setDarkMode(!darkMode);
    }
  return (
    <>
        <div className=" max-w-full flex flex-wrap justify-between items-center m-auto p-8 border-b border-gray-300 bg-gray-100 dark:bg-slate-900 dark:border-none dark:text-gray-200">
            <div className="flex items-center font-bold text-3xl">
                <Link to="/">
                    <img className="w-24 rounded-full mr-2" src={Mooi} alt="mooi" />
                    
                </Link>
                <span>Mooi</span>
            </div>
            <nav className="text-2xl font-bold">
                <NavLink to="/" className="mx-2 p-3 rounded-lg hover:cursor-pointer hover:bg-gray-200 hover:text-black">Home</NavLink>
                <NavLink to="/products" className="mx-2 p-3 rounded-lg hover:cursor-pointer hover:bg-gray-200 hover:text-black  ">Products</NavLink>
            </nav>
            
            <div className=" flex text-2xl font-bold">
                <span className="mx-2">Cart: </span>
                <span></span>
                    <div className="flex">
                        <button className="ml-4 text-3xl" onClick={handleClick}>{darkMode ? <MdOutlineLightMode /> : <CiDark className="" />} </button>
                    </div>
            </div>
            
        </div>
    </>
  )
}
