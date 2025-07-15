import React from 'react';
import { FaTimes } from "react-icons/fa";

import Link from 'next/link';
import Nav from './Nav';

interface MobileMenuProps {
    MobileHandler: () => void;
}

const MobileMenu = ({MobileHandler}: MobileMenuProps) => {

    return (
        <div className="mobilemenu-popup">
            <div className="mobilemenu-inner">
                <div className="mobilemenu-header">
                    <div className="mobile-nav-logo">
                        <Link href={process.env.PUBLIC_URL + "/"}>
                            <img className="light-mode" src={process.env.PUBLIC_URL + "/images/logo-2.svg"} alt="Site Logo" />
                            <img className="dark-mode" src={process.env.PUBLIC_URL + "/images/logo-3.svg"} alt="Site Logo" />
                        </Link>
                    </div>
                    <button className="mobile-menu-close" onClick={MobileHandler} ><FaTimes /></button>
                </div>
                <div className="mobilemenu-body">
                    <Nav />
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;