import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import animationData from '../../lotties/404-animation.json';
import TopNavbar from "../components/Header/TopNavbar";
import Lottie from "lottie-react";

function PageNotFound() {
    
  return (
    <Fragment>
      <TopNavbar />
      <Container>
        <div className="m-auto w-100 text-center my-5">
          <Lottie style={{ height: '200px' }} animationData={animationData} loop />
          <h1 className="text-danger mb-4">Böyle bir sayfa bulunamadı!</h1>
          <Link to="/" className="text-dark fs-5">Anasayfaya Geri Dön</Link>
        </div>
      </Container>
    </Fragment>
  );
}

export default PageNotFound;