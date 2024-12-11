import logo from "/logo.png"
import { Button } from "@/components/ui/button"
import { Link, NavLink, useLocation } from "react-router"

export default function Navbar() {
    const location = useLocation()

    return (
        <header className={`${location.pathname === "/" ? "bg-transparent" : "bg-app"} z-50  w-full top-0 fixed h-20 flex justify-between items-center px-10`}>
            <Link to={"/"}>
                <img src={logo} alt="Logo" />
            </Link>
            <div className="flex items-center gap-10">
                <nav className="flex gap-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "relative text-app font-bold after:content-[''] after:w-full after:h-1 after:bg-[#FB773C] after:absolute after:left-0 after:-bottom-1" : "text-white hover:text-opacity-70")}
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to="/pasien"
                        className={({ isActive }) => (isActive ? "relative text-white font-bold after:content-[''] after:w-full after:h-1 after:bg-[#FB773C] after:absolute after:left-0 after:-bottom-1 " : "text-white hover:text-opacity-70")}
                    >
                        PASIEN
                    </NavLink>
                    <NavLink
                        to="/review"
                        className={({ isActive }) => (isActive ? "relative text-white font-bold after:content-[''] after:w-full after:h-1 after:bg-[#FB773C] after:absolute after:left-0 after:-bottom-1 " : "text-white hover:text-opacity-70")}
                    >
                        REVIEW
                    </NavLink>
                    <NavLink
                        to="/team"
                        className={({ isActive }) => (isActive ? "relative text-white font-bold after:content-[''] after:w-full after:h-1 after:bg-[#FB773C] after:absolute after:left-0 after:-bottom-1 " : "text-white hover:text-opacity-70")}
                    >
                        TEAM
                    </NavLink>
                </nav>
                <div className="flex gap-3">
                    <Button className="bg-transparent border-white text-white hover:bg-white hover:text-app" variant="outline" size="sm">Sign Up</Button>
                    <Button className="bg-[#FB773C] hover:bg-[#FB773C] hover:bg-opacity-80" size="sm">Sign In</Button>
                </div>
            </div>
        </header >
    )
}