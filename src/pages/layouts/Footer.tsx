import { Footer as FlowbiteFooter } from "flowbite-react";

const Footer = () => {
  return (
    <FlowbiteFooter container={true} className="dark:bg-EPIQBlack">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Brand
            href="/"
            src="/images/EPIQ_logo.png"
            alt="EPIQ Logo"
          />
          <FlowbiteFooter.LinkGroup>
            <FlowbiteFooter.Link href="/over">Over</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="/contact">Contact</FlowbiteFooter.Link>
          </FlowbiteFooter.LinkGroup>
        </div>
        <FlowbiteFooter.Divider />
        <FlowbiteFooter.Copyright
          href="/"
          by="EPIQ"
          year={new Date().getFullYear()}
        />
      </div>
    </FlowbiteFooter>
  );
};

export default Footer;
