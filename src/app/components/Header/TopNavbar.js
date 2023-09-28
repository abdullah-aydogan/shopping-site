import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { fetchAllCategories } from "../../features/Category/CategorySlice";
import RightCartIcon from "../Cart/RightCartIcon";

function TopNavbar() {

  const { categories } = useSelector((state) => state.categories);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <div>
      <Navbar className="p-3" bg="primary" expand="lg" variant="dark">
        <Container>
          <NavLink to={"/"} className={"navbar-brand"}>Alışveriş Sitesi</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to={"/"} className="nav-link">Anasayfa</NavLink>
              <NavDropdown title="Kategoriler" id="basic-nav-dropdown">
                {
                  categories && categories.map((c, index) => {
                    return (
                      <Link to={`/category/${c}`} className="text-capitalize dropdown-item" key={index}>
                        {c}
                      </Link>
                    );
                  })
                }
              </NavDropdown>
              <NavLink to={"/cart"} className="nav-link">Sepet</NavLink>
              <NavLink to={"/contact"} className="nav-link">İletişim</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <RightCartIcon />
    </div>
  );
}

export default TopNavbar;