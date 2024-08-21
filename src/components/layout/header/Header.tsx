"use client"

import Image from "next/image";
import "./styles.css";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="header">
            <Link href="/">
                <Image className="logo" src={'/logo/logo.svg'} alt={'logo'} width={160} height={37}/>
            </Link>
        </header>
    )
}