import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import BookConsultation from "@/assets/book-consultation.svg";

const Navbar = () => {
  return (
    <header className="header">
      <div className="navbar-container">
        <Link href="/" className="logo custom-logo">
          <Image src={Logo} alt="Logo" />
        </Link>

        <div className="links-container">
          <Link
            style={{
              color: "black",
              textDecoration: "none",
              fontWeight: 600,
            }}
            href="/about"
          >
            About us
          </Link>
          <ScrollLink
            className="custom-scrollLink"
            style={{
              color: "black",
              textDecoration: "none",
              fontWeight: 600,
              cursor: "pointer",
            }}
            to="contactUsSection"
            smooth={true}
            duration={100}
          >
            Contact us
          </ScrollLink>
        </div>

        <div className="book-consultation">
          <a target="_blank" href="https://calendly.com/nebulalogix">
            <Image
              src={BookConsultation}
              alt="Book a Consultation"
              width="140"
              height="140"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
