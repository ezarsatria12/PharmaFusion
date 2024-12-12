import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Sidebar({ children }) {
    return (
        <div className="flex">
            <aside className="bg-app h-screen w-48 py-5 text-white fixed">
                <img className="mx-auto" src="/logo.png" alt="Logo" width={130} />
                <nav className="flex font-medium flex-col gap-4 mt-10">
                    <NavLink
                        to={"/"}
                        className={
                            ({ isActive }) => (isActive ? "relative after:content-[''] after:w-1 after:rounded-r-md after:h-full after:bg-white after:absolute after:left-0 flex gap-2 items-center px-5" : "flex gap-2 items-center px-5 hover:text-gray-200")
                        }
                    >
                        <Icon icon="flowbite:home-solid" className="text-2xl" />
                        Home
                    </NavLink>
                    <NavLink to={"/pasien"}
                        className={
                            ({ isActive }) => (isActive ? "relative flex gap-2 items-center px-5 after:content-[''] after:w-1 after:rounded-r-md after:h-full after:bg-white after:absolute after:left-0" : "flex gap-2 items-center px-5 hover:text-gray-200")
                        }
                    >
                        <Icon icon="flowbite:users-solid" className="text-2xl" />
                        Pasien
                    </NavLink>
                    <NavLink to={"/user-setting"}
                        className={
                            ({ isActive }) => (isActive ? "relative after:content-[''] after:w-1 after:rounded-r-md after:h-full after:bg-white after:absolute after:left-0 flex gap-2 items-center px-5" : "flex gap-2 items-center px-5 hover:text-gray-200")
                        }
                    >
                        <Icon
                            icon="flowbite:user-settings-solid"
                            className="text-2xl"
                        />
                        Setting
                    </NavLink>
                </nav>
            </aside>
            {children}
        </div>
    );
}
