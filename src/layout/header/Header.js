import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as routerLink from "../../config/routersConfig";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function Header() {
  const [websiteSize, setWebsiteSize] = useState("none");
  let navbarElement = <></>;

  useEffect(() => {
    if (window.innerWidth >= 1006) setWebsiteSize("pc");
    else setWebsiteSize("mobile");
  }, []);
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1006) setWebsiteSize("mobile");
    else setWebsiteSize("pc");
  });

  if (websiteSize === "mobile") {
    navbarElement = (
      <>
        <Nav>
          <NavLink to={routerLink.index.path}>Trang chủ</NavLink>
        </Nav>
        <Nav>
          <NavLink to={routerLink.products.path}>Sản phẩm</NavLink>
        </Nav>
        <Nav>
          <hr />
          <NavDropdown title="Khác" id="collasible-nav-dropdown">
            <NavDropdown.ItemText>
              <NavLink to={routerLink.about.path}>Giới thiệu</NavLink>
            </NavDropdown.ItemText>
            <NavDropdown.ItemText>
              <NavLink to={routerLink.client.path}>Khách hàng</NavLink>
            </NavDropdown.ItemText>
            <NavDropdown.ItemText>
              <NavLink to={routerLink.contact.path}>Liên hệ</NavLink>
            </NavDropdown.ItemText>
            <NavDropdown.ItemText>
              <NavLink to={routerLink.login.path}>Đăng nhập</NavLink>
            </NavDropdown.ItemText>
            <NavDropdown.ItemText>
              <NavLink to={routerLink.register.path}>Đăng ký</NavLink>
            </NavDropdown.ItemText>
            <NavDropdown.ItemText>
              <NavLink to={routerLink.user.path}>Tài khoản</NavLink>
            </NavDropdown.ItemText>
            <NavDropdown.ItemText>
              <NavLink to={routerLink.user.path}>Yêu thích</NavLink>
            </NavDropdown.ItemText>
            <NavDropdown.ItemText>
              <NavLink to={routerLink.index.path}>Đăng xuất</NavLink>
            </NavDropdown.ItemText>
          </NavDropdown>
        </Nav>
      </>
    );
  }
  if (websiteSize === "pc") {
    navbarElement = (
      <>
        <Nav className="me-auto header_navbar_center">
          <Nav>
            <NavLink to={routerLink.index.path}>Trang chủ</NavLink>
          </Nav>
          <Nav>
            <NavLink to={routerLink.products.path}>Sản phẩm</NavLink>
          </Nav>
          <Nav>
            <NavLink to={routerLink.about.path}>Giới thiệu</NavLink>
          </Nav>
          <Nav>
            <NavLink to={routerLink.client.path}>Khách hàng</NavLink>
          </Nav>
          <Nav>
            <NavLink to={routerLink.contact.path}>Liên hệ</NavLink>
          </Nav>
        </Nav>
        <Nav>
          <hr />
          <Nav>
            <NavLink to={routerLink.login.path}>Đăng nhập</NavLink>
          </Nav>
          <Nav>
            <NavLink to={routerLink.register.path}>Đăng ký</NavLink>
          </Nav>
          <NavDropdown title="Khác" id="collasible-nav-dropdown">
            <NavDropdown.ItemText>
              <NavLink to={routerLink.user.path}>Tài khoản</NavLink>
            </NavDropdown.ItemText>
            <NavDropdown.ItemText>
              <NavLink to={routerLink.user.path}>Yêu thích</NavLink>
            </NavDropdown.ItemText>
            <NavDropdown.ItemText>
              <NavLink to={routerLink.index.path}>Đăng xuất</NavLink>
            </NavDropdown.ItemText>
          </NavDropdown>
        </Nav>
      </>
    );
  }

  return (
    <header className="header-area">
      {/* header section start */}
      <div className="header_main_section">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href={routerLink.index.path}>SHOES SHOP</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              {navbarElement}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* header section end */}
    </header>
  );
}

export default Header;
