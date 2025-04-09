"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  
  return (
    <header ref={headerRef}>
      <nav>
        <div className="logo">Elie</div>
        <input 
        type="checkbox"
        id="burger" 
        checked={isOpen} 
        onChange={() => setIsOpen(!isOpen)}
        />
        <label className="burger" htmlFor="burger">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link href="/#projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="/#about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}