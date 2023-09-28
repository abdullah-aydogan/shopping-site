import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductCard from "../../components/Product/Card/ProductCard";

function AllProducts() {

  const { products } = useSelector((state) => state.products);

  return (
    <Fragment>
      <Container>
        <h4 className="my-4 text-center">Ürünler Listesi</h4>
        <Row>
          {
            products && products.map((p) => {
              return (
                <Col xs={12} sm={6} md={4} lg={4} className="mb-4" key={p.id}>
                  <ProductCard product={p} />
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </Fragment>
  );
}

export default AllProducts;