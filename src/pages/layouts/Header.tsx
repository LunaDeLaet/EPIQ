import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true} className="dark:bg-EPIQBlack">
      <Navbar.Brand href="/" className="p-5">
        <img
          src="/images/EPIQ_logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='pr-10'>
        <Navbar.Link className="text-xl" href="/home">
          Home
        </Navbar.Link>
        <Navbar.Link className="text-xl" href="/over">
          Over
        </Navbar.Link>
        <Navbar.Link className="text-xl" href="/coaching">
          Coahing
        </Navbar.Link>
        <Navbar.Link className="text-xl" href="/prijzen">
          Prijzen
        </Navbar.Link>
        <Navbar.Link className="text-xl" href="/contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
