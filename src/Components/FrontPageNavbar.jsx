import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";

function FrontPageNavbar() {
  return (
    
    <Navbar fluid rounded>
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Whatsapp</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>Hm</NavbarLink>
        <NavbarLink as={Link} href="#">Abt</NavbarLink>
        <NavbarLink href="#">Srvs</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default FrontPageNavbar;