import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navIcons =[
    {
        id: 1,
        icon: "/assets/icons/search.svg",
        alt: "Search",
        link: "/search"
    },
    {
        id: 2,
        icon: "/assets/icons/black-heart.svg",
        alt: "heart",
        link: "/favourites"
    },
    {
        id: 3,
        icon: "/assets/icons/user.svg",
        alt: "User",
        link: "/user"
    }
]

const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className="nav">
            <Link href="/" className="flex items-center gap-1">
                <Image
                    src="/assets/icons/logo.svg"
                    alt="Logo"
                    width={27}
                    height={27}
                />

                <p className='nav-logo'>
                    Price <span className='text-primary'>Tracker</span>
                </p>
            </Link>
            <div className="flex items-center gap-5">
                {navIcons.map((icon) => (
                    <Link key={icon.id} href={icon.link}>
                        <Image
                            src={icon.icon}
                            alt={icon.alt}
                            width={28}
                            height={28}
                            className='object-contain'
                        />
                    </Link>
                ))}
            </div>
        </nav>
    </header>
  )
}

export default Navbar