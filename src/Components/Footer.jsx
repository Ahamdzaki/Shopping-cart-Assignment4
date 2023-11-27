import {Link} from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="flex justify-center bottom-0 text-4xl items-center bg-gray-100 p-9 border-t border-gray-300 dark:bg-slate-900 dark:border-none">
        <Link to="https://www.instagram.com/zaki__naibi/" target="_blank" className="mx-2 text-purple-700 dark:text-purple-600"> <FaInstagram /> </Link>
        <Link to="https://web.facebook.com/profile.php?id=100012263082469" target="_blank" className="mx-2 text-blue-700 dark:blue-400"> <FaFacebook /> </Link>
        <Link to="https://github.com/Ahamdzaki" target="_blank" className="mx-2 dark:text-white" > <FaGithub /> </Link>
      </div>
    </>
  )
}
