"use client"

import Image from "next/image";
import "./styles.css";

export const Header = () => {
    return (
        <header className="header">
            <Image className="logo" src={'/logo/logo.svg'} alt={'logo'} width={160} height={37}/>
        </header>
    )
}