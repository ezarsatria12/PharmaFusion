import logo from "/logo.png"
import { Button } from "@/components/ui/button"
import { Link, NavLink, useLocation, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { useAuth } from "@/utils/AuthProvider"

export default function Navbar() {
    const location = useLocation()
    const navigate = useNavigate()
    const { isAuthenticated } = useAuth()

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [isScrolled])


    return (
        <header className={`${["/", "/review"].includes(location.pathname) && isScrolled ? "bg-app" : !["/", "/review"].includes(location.pathname) ? "bg-app" : "bg-opacity-0"}  z-50  w-full top-0 fixed h-20 flex justify-between items-center px-10 transition duration-200`}>
            <Link to={"/"}>
                <img src={logo} alt="Logo" />
            </Link>
            <div className="flex items-center gap-10">
                <nav className="flex gap-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? `text-white bg-app px-2 rounded relative font-bold after:content-[''] after:w-full after:h-1 after:bg-[#FB773C] after:absolute after:left-0 after:-bottom-1` : `hover:text-opacity-70 text-white bg-app px-2 rounded`)}
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
                {
                    !isAuthenticated &&
                    <div className="flex gap-3">
                        <Button onClick={() => navigate("/register")} className="bg-transparent border-white text-white hover:bg-white hover:text-app" variant="outline" size="sm">Sign Up</Button>
                        <Button onClick={() => navigate("/login")} className="bg-[#FB773C] hover:bg-white hover:text-app" size="sm">Sign In</Button>
                    </div>
                }
            </div>
        </header >
    )
}