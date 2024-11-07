import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button"



export default function Footer() {
    return(
        <footer>
            <div id="footer" className="container py-24 bg-pink-700 text-white max-w-screen-2xl mx-auto flex justify-center">
                
                <div>
                    <div className="flex justify-center font-bold"><p className="font-extrabold rounded-lg bg-white text-pink-700 px-1">S.</p> Saeed</div>

     <div className="text-white p-7 flex justify-evenly gap-7">
          < FaFacebookSquare className="w-7 h-7" />
          <FaInstagramSquare className="w-7 h-7" />
          <FaLinkedin className="w-7 h-7" />

          </div>
          <div>
            <ul>
                <li className="flex justify-between gap-5">
                <Link href="/about">About</Link>
                <Link href="/services">Service</Link>
                <Link href="/project">Projects</Link>
                <Link href="/contact">Contact</Link>
                </li>
            </ul>
          
          </div>





            </div>
            </div>
        </footer>

    )
}