import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import TopNavbar from "../../../components/Header/TopNavbar";
import "./ProductDetails.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCarts } from "../../../features/Cart/CartSlice";

function SingleProductDetails() {

  let { productId } = useParams();
  let [product, setProduct] = useState(null);
  let [quantity, setQuantity] = useState(1);
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const increaseQunaity = (e) => {
    e.preventDefault();
    quantity += 1;
    setQuantity(quantity);
  };

  const decreaseQunaity = (e) => {
    e.preventDefault();
    quantity > 1 ? setQuantity((quantity -= 1)) : setQuantity(quantity);
  };

  const addToCart = (e) => {
    e.preventDefault();
    let item = {id: parseInt(productId), quantity: quantity, price: product.price};
    dispatch(addToCarts(item));
  };

  useEffect(() => {
    let result = products.find((p) => p.id === parseInt(productId));
    setProduct(result);
  }, [productId, products]);

  return (
    <Fragment>
      <TopNavbar />
      <Container>
        {
          product && (
            <Row className="my-5">
              <Col md={6} sm={12}>
                <div className="img-container p-3 mb-3">
                  <Image className="single-img" src={product.image} />
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="px-4">
                  <h2>{product.title}</h2>
                  <h4 className="py-2 fs-5">
                    Kategori : {" "}
                    <Link to={`/category/${product.category}`} className="text-capitalize text-decoration-none">
                      {product.category}
                    </Link>
                  </h4>
                  <h4 className="py-2">Fiyat : ${product.price}</h4>
                  <p>{product.description}</p>
                  <div className="d-flex mb-3">
                    <button className="btn btn-sm btn-dark fs-6 me-3 text-center" onClick={decreaseQunaity}>
                      <FaMinus />
                    </button>
                    <input type="number" className="form-control text-center w-50 p-0 m-0" value={quantity}
                      readOnly={true}
                      required={true}/>
                    <button className="btn btn-sm btn-dark fs-6 ms-3 text-center" onClick={increaseQunaity}>
                      <FaPlus />
                    </button>
                  </div>
                  <div>
                    <Button variant="dark" className="me-2">Satın Al</Button>
                    <Button variant="danger" className="ms-2" onClick={addToCart}>Sepete Ekle</Button>
                  </div>
                </div>
              </Col>
            </Row>
          )
        }
      </Container>
    </Fragment>
  );
}

export default SingleProductDetails;