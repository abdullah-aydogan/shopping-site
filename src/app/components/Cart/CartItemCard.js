import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { increaseQuantity, decreaseQuantity, removeFormCart } from "../../features/Cart/CartSlice";

function CartItemCard({ item }) {
  
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const increaseItemQuantity = (e) => {
    e.preventDefault();
    dispatch(increaseQuantity(item));
  };

  const decreaseItemQuantity = (e) => {
    e.preventDefault();
    dispatch(decreaseQuantity(item));
  };
  
  const removeItem = (e) => {
    e.preventDefault();
    dispatch(removeFormCart(item));
  };

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${item.id}`).then((res) => {
      setProduct({ ...res.data, quantity: item.quantity });
    });
  }, [item]);

  let content = "";

  if (product) {
    return (content = (
      <div className="my-4">
        <Card>
          <Card.Body>
            <div className="d-flex flex-column justify-content-between align-items-center">
              <Link to={`/product/${product.id}`} className="text-dark fs-5 mb-3">
                {product.title ? product.title.slice(0, 20) : ""}...
              </Link>
              <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-sm btn-dark fs-6 me-3 text-center" onClick={decreaseItemQuantity}>
                  <FaMinus />
                </button>
                <span className="fs-4">{product.quantity}</span>
                <button className="btn btn-sm btn-dark fs-6 ms-3 text-center" onClick={increaseItemQuantity}>
                  <FaPlus />
                </button>
              </div>
              <div className="text-center mb-3">
                <span className="fs-5">
                  {product.price ? (product.price * product.quantity).toFixed(2) : ""} ₺
                </span>
              </div>
              <div className="text-center">
                <Button variant="danger" onClick={removeItem}>Kaldır</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    ));
  }
  return { content };
}

export default CartItemCard;