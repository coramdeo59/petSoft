import React from 'react';
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
const Logo = () => {
    return (
        <Link href="/">
            <Image src={logo} alt="petshop logo" />
        </Link>
    );
};

export default Logo;