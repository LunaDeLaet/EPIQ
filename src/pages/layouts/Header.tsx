import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand
        href="/"
        className="p-5 text-4xl font-bold text-grey">
        EPIQ
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="pr-10">
        <Navbar.Link
          className="text-xl"
          href="/over">
          Over
        </Navbar.Link>
        <Navbar.Link
          className="text-xl"
          href="/coaching">
          Coaching
        </Navbar.Link>
        <Navbar.Link
          className="text-xl"
          href="/prijzen">
          Prijzen
        </Navbar.Link>
        <Navbar.Link
          className="text-xl"
          href="/contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
