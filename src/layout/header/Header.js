import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as routerLink from "../../config/routersConfig";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { usersState } from "../../services/redux/selectors/selectors";
import { checkLoginStatus } from "../../utils/functions/commonFunctions";
import { removeLocalStorage } from "../../services/Storage/localStorage";
import { removeSessionStorage } from "../../services/Storage/sessionStorage";
import * as Ri from "react-icons/ri";

function Header() {
  let userName = useRef("");
  let navigate = useNavigate();
  let usState = useSelector(usersState);
  const [permission, setPermission] = useState("none");
  const [websiteSize, setWebsiteSize] = useState("none");
  let navbarElement = <></>;
  let userBarElementMb = <></>;
  let userBarElementPc = <></>;

  useEffect(() => {
    if (window.innerWidth >= 1006) setWebsiteSize("pc");
    else setWebsiteSize("mobile");

    let loginStatus = checkLoginStatus();
    usState.forEach((user) => {
      // console.log(
      //   user.email === loginStatus.email,
      //   user.password === loginStatus.password,
      //   user.statusUser
      // );
      if (
        user.email === loginStatus.email &&
        user.password === loginStatus.password &&
        user.statusUser
      ) {
        userName.current = user.userName;
        setPermission(user.typeUser);
      }
    });
  }, [usState]);

  const logOutAcc = (e) => {
    e.preventDefault();
    navigate(routerLink.index.path);
    removeLocalStorage("loginStatus");
    removeSessionStorage("loginStatus");
    setPermission("none");
  };

  // console.log(123123123123123, websiteSize);
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1006) {
      if (websiteSize === "pc") {
        setWebsiteSize("mobile");
      }
    } else if (websiteSize === "mobile") {
      setWebsiteSize("pc");
    }
  });

  //===================Render UserNavbar===================//
  if (permission === "user") {
    userBarElementMb = (
      <>
        <hr />
        <NavDropdown.ItemText>
          <NavLink to={routerLink.user.path}>Thông tin cá nhân </NavLink>
        </NavDropdown.ItemText>
        <NavDropdown.ItemText>
          <NavLink to={routerLink.cart.path}>Giỏ hàng</NavLink>
        </NavDropdown.ItemText>
        <NavDropdown.ItemText>
          <NavLink to={routerLink.favorite.path}>Yêu thích</NavLink>
        </NavDropdown.ItemText>
        <NavDropdown.ItemText>
          <Link to={"/"} onClick={logOutAcc}>
            Đăng xuất
          </Link>
        </NavDropdown.ItemText>
      </>
    );
    userBarElementPc = (
      <>
        <NavDropdown
          title={
            <>
              <Ri.RiUserLine style={{ marginTop: "-3px" }} />
              <span> </span>
              {userName.current}
            </>
          }
          id="collasible-nav-dropdown"
        >
          <NavDropdown.ItemText>
            <NavLink to={routerLink.user.path}>Thông tin cá nhân </NavLink>
          </NavDropdown.ItemText>
          <NavDropdown.ItemText>
            <NavLink to={routerLink.cart.path}>Giỏ hàng</NavLink>
          </NavDropdown.ItemText>
          <NavDropdown.ItemText>
            <NavLink to={routerLink.favorite.path}>Yêu thích</NavLink>
          </NavDropdown.ItemText>
          <NavDropdown.ItemText>
            <Link to={"/"} onClick={logOutAcc}>
              Đăng xuất
            </Link>
          </NavDropdown.ItemText>
        </NavDropdown>
      </>
    );
  } else if (permission === "admin") {
    userBarElementMb = (
      <>
        <hr />
        <NavDropdown.ItemText>
          <NavLink to={routerLink.admin.path}>Quản trị</NavLink>
        </NavDropdown.ItemText>
        <NavDropdown.ItemText>
          <Link to={"#"} onClick={logOutAcc}>
            Đăng xuất
          </Link>
        </NavDropdown.ItemText>
      </>
    );
    userBarElementPc = (
      <>
        <NavDropdown
          title={
            <>
              <Ri.RiAdminFill style={{ marginTop: "-3px" }} />
              <span> </span>
              Admin
            </>
          }
          id="collasible-nav-dropdown"
        >
          <NavDropdown.ItemText>
            <NavLink to={routerLink.admin.path}>Quản trị</NavLink>
          </NavDropdown.ItemText>
          <NavDropdown.ItemText>
            <Link to={"/"} onClick={logOutAcc}>
              Đăng xuất
            </Link>
          </NavDropdown.ItemText>
        </NavDropdown>
      </>
    );
  } else if (permission === "none") {
    userBarElementMb = (
      <>
        <hr />
        <NavDropdown.ItemText>
          <NavLink to={routerLink.login.path}>Đăng nhập</NavLink>
        </NavDropdown.ItemText>
        <NavDropdown.ItemText>
          <NavLink to={routerLink.register.path}>Đăng ký</NavLink>
        </NavDropdown.ItemText>
      </>
    );
    userBarElementPc = (
      <>
        <Nav>
          <NavLink to={routerLink.login.path}>Đăng nhập</NavLink>
        </Nav>
        <Nav>
          <NavLink to={routerLink.register.path}>Đăng ký</NavLink>
        </Nav>
      </>
    );
  }

  //===================Render Navbar===================//
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
            {userBarElementMb}
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
          {userBarElementPc}
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
            <Navbar>
              <Link to={routerLink.index.path} className="navbar-brand">
                SHOES SHOP
              </Link>
            </Navbar>
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
