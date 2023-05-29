import { Navbar } from "flowbite-react";
import Head from "next/head";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <Navbar>
        <Navbar.Brand
          href="/"
          className="p-5 text-4xl font-bold">
          <Image
            alt="Epiq Logo"
            src="/images/favicon.png"
            width={50}
            height={50}
            className="p-2"
          />
          Epiq
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="pr-10">
          <Navbar.Link
            className="text-xl text-grey"
            href="/over">
            Over
          </Navbar.Link>
          <Navbar.Link
            className="text-xl  text-grey"
            href="/coaching">
            Coaching
          </Navbar.Link>
          <Navbar.Link
            className="text-xl text-grey"
            href="/prijzen">
            Prijzen
          </Navbar.Link>
          <Navbar.Link
            className="text-xl text-grey"
            href="/contact">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
