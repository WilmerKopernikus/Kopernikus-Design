"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/header.css';



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link href="/">
            <Image
              src="/images/KopernikusLogo.png"
              alt="Kopernikus Design Logo"
              layout="fill"
              objectFit="contain" 

              className="header-logo-img"
              priority
            />
          </Link>
        </div>
      </header>

      <div className="hamburger-menu">
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`menu-overlay ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/cases">Cases</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
