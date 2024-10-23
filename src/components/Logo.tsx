import React from 'react';
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.svg";

const Logo = () => {
    return (
        <Link href="/">
            <Image src={logo} alt="petshop logo" />
        </Link>
    );
};

export default Logo;