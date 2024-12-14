import logo from "/logo.png"
import { Link } from "react-router"

export default function Footer() {
    return (
        <footer className="w-full bg-[#263238] text-white px-[120px] pt-10 pb-8">
            <div className="flex justify-between items-end">
                <Link to={"/"}>
                    <img src={logo} width={140} alt="Logo" />
                </Link>
                <nav className="flex gap-4">
                    <Link className="hover:text-opacity-70 text-white" to="/">HOME</Link>
                    <Link className="hover:text-opacity-70 text-white" to="/pasien">PASIEN</Link>
                    <Link className="hover:text-opacity-70 text-white" to="/review">REVIEW</Link>
                    <Link className="hover:text-opacity-70 text-white" to="/team">TEAM</Link>
                </nav>
            </div>
            <h3 className="text-center mt-10 font-medium">Copyright by Creativ Academy All Right Reserved.</h3>
        </footer>
    )
}