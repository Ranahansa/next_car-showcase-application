import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button';

const Navbar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href={"/"} className="flex justify-center items-center">
                    <Image
                        src="https://static.vecteezy.com/system/resources/previews/013/923/543/original/blue-car-logo-png.png"
                        alt="logo"
                        width={78}
                        height={18}
                        className="object-contain"
                    />
                    <span className="text-black text-[18px] font-bold ml-1 font-mono">
                        .Hub
                    </span>
                </Link>
                <Button
                    title="Sign In"
                    btnType="button"
                    containerStyles="text-black font-bold rounded-lg bg-gray-200 min-w-[80px] h-8 flex justify-center items-center"
                />
            </nav>
        </header>
    );
}

export default Navbar