import { Menu } from "lucide-react"
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="flex justify-between p-4 bg-black text-white max-w-screen-2xl mx-auto">
      {/* Logo */}
      <div>
        <h2 className="text-1xl text-white font-bold bg-pink-600 rounded-lg px-1">S.</h2>
      </div>
      <div className="flex-1 px-2"><p className="text-pink-50 font-semibold"> Saeed</p> </div>
      {/* Nav buttons */}
      <ul className="hidden md:block">
        <li className="flex gap-5 py-4 font-1xl ">
          <Link className="hover:text-pink-600"href="/">Home</Link>
          <Link className="hover:text-pink-600"href="#about">About</Link>
          <Link className="hover:text-pink-600"href="#services">Services</Link>
          <Link className="hover:text-pink-600"href="#project">Projects</Link>
          <Link className="hover:text-pink-600"href="#contact">Contact</Link>
          
        </li>
      </ul>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <ul>
            <li className="space-x-5 py-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/project">Projects</Link>
              <Link href="/contact">Contact</Link>



            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}