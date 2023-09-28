import React, { Fragment } from "react";
import TopNavbar from "../../components/Header/TopNavbar";
import AllCategories from "../../components/Categories/AllCategories";
import AllProducts from "../Products/AllProducts";

function Home() {
  return (
    <Fragment>
      <TopNavbar />
      <AllProducts />
      <AllCategories />
    </Fragment>
  );
}

export default Home;