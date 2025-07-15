import Link from 'next/link';
import React from 'react';
import { FaAngleDown } from "react-icons/fa";


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/about-us"}>About Us</Link></li>
                <li><Link href={"/projects"}>Projects</Link></li>
                <li><Link href={"/our-clients"}>Our Clients</Link></li>
                <li><Link href={"/contact-us"}>Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;