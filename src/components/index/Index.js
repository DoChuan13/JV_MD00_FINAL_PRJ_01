import React from "react";
import About from "../about/About";
import Client from "../client/Client";
import Contact from "../contact/Contact";
import Products from "../products/Products";
import Banner from "./subIndex/Banner";

function Index() {
  return (
    <>
      <Banner />
      <Products />
      <About />
      <Client />
      <Contact />
    </>
  );
}

export default Index;
