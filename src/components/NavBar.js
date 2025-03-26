import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import logo from "../assets/ucea-logo.png";

// Styled Components
const Header = styled.header`
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  transition: all 0.3s ease-in-out;
  background-color: rgb(255, 255, 255);
`;

const NavbarContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 40px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }

  img {
    height: 50px;
    transition: all 0.3s ease;
  }
`;

const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavLinkItem = styled.li`
  position: relative;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: inherit;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ffcc00;
    }
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  list-style: none;
  padding: 10px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: ${({ open }) => (open ? "block" : "none")};
  min-width: 200px;
`;

const DropdownItem = styled.li`
  padding: 10px 20px;
  text-align: left;
  &:hover {
    background: #f0f0f0;
  }
`;

const RegisterButton = styled(Link)`
  display: inline-block;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #004080;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0059b3;
  }
`;

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <Header>
      <NavbarContainer>
        <Logo>
          <Link to="/">
            <img src={logo} alt="UCEA Logo" />
          </Link>
        </Logo>

        {/* Navigation + Register Button */}
        <NavLinksWrapper>
          <NavLinks>
            <NavLinkItem>
              <Link to="/about">About</Link>
            </NavLinkItem>
            
            <NavLinkItem onMouseEnter={() => toggleDropdown("attendee")} onMouseLeave={() => toggleDropdown(null)}>
              <Link to="#">Attendee Info</Link>
              <DropdownMenu open={dropdownOpen === "attendee"}>
                <DropdownItem><Link to="/registration">Registration</Link></DropdownItem>
                <DropdownItem><Link to="/hotel">Hotel</Link></DropdownItem>
                <DropdownItem><Link to="/program">Program</Link></DropdownItem>
              </DropdownMenu>
            </NavLinkItem>

            <NavLinkItem onMouseEnter={() => toggleDropdown("sessions")} onMouseLeave={() => toggleDropdown(null)}>
              <Link to="#">Sessions</Link>
              <DropdownMenu open={dropdownOpen === "sessions"}>
                <DropdownItem><Link to="/cfp">Call for Proposals</Link></DropdownItem>
                <DropdownItem><Link to="/general-sessions">General Sessions</Link></DropdownItem>
                <DropdownItem><Link to="/presenter-tips">Presenter & Facilitator Tips</Link></DropdownItem>
              </DropdownMenu>
            </NavLinkItem>

            <NavLinkItem onMouseEnter={() => toggleDropdown("events")} onMouseLeave={() => toggleDropdown(null)}>
              <Link to="#">Events</Link>
              <DropdownMenu open={dropdownOpen === "events"}>
                <DropdownItem><Link to="/annual-banquet">Annual Banquet</Link></DropdownItem>
                <DropdownItem><Link to="/awards-luncheon">Awards Luncheon</Link></DropdownItem>
              </DropdownMenu>
            </NavLinkItem>
            
            <NavLinkItem><Link to="/sponsorship">Sponsorship</Link></NavLinkItem>
            <NavLinkItem><Link to="/exhibitor">Exhibitor</Link></NavLinkItem>
            <NavLinkItem><Link to="/faqs">FAQs</Link></NavLinkItem>
          </NavLinks>

          {/* Register Button */}
          <RegisterButton to="/register">REGISTER NOW</RegisterButton>
        </NavLinksWrapper>
      </NavbarContainer>
    </Header>
  );
};

export default NavBar;
