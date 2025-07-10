import { Link } from "react-router-dom"
import { Input } from "./ui/input"
import Toggletheme from "./Theme"

export default function Header() {

    return (
        <header className="bg-gray-900 text-white flex  justify-between items-center  ">
                <div className="flex gap-2 ">
                    <Toggletheme />
                    <h1 className="md:text-xl flex-1 "> <Link to="/">CivilSoft Blog</Link></h1>
                </div>
                <nav className="flex gap-6">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <div>
                    <Input
                    placeholder="search..."
                    type="text"
                    className="bg-gray-800 dark:text-black dark:bg-gray-100 text-sm py-1 px-6 rounded-lg font-bold placeholder:font-bold placeholder:text-black "/>
                </div>
        </header>
    )
}