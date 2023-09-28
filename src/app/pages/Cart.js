import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemCard from "../components/Cart/CartItemCard";
import TopNavbar from "../components/Header/TopNavbar";
import { subTotalPrice, totalPrice, totalTax } from "../features/Cart/CartSelector";
import { cartState } from "../features/Cart/CartSlice";

function Cart() {
    
  let state = useSelector((state) => state);
  let { carts } = useSelector(cartState);
  const subTotal = subTotalPrice(state);
  const tax = totalTax(state);
  const totalAmmount = totalPrice(state);

  return (
    <Fragment>
      <TopNavbar />
      <Container>
        {
          !carts.length && (
            <div className="w-100 my-5 text-center text-danger">
              <h3>
                <p className="mb-4">Herhangi bir ürünü sepete eklemediniz.</p>
                <Link to="/" className="text-dark">Alışverişe Başlayın</Link>
              </h3>
            </div>
          )
        }

        {
          carts.length > 0 && carts.map((c) => {
            return (
              <CartItemCard item={c} key={c.id} />
            );
          })
        }

        {
          carts.length > 0 && (
            <div className="my-3">
              <Card>
                <Card.Body>
                  <div className="d-flex flex-column justify-content-between align-items-center">
                    <div>
                      <h5>
                        KDV Hariç : {subTotal} ₺
                      </h5>
                    </div>
                    <div>
                      <h5>KDV(20%) : {tax} ₺</h5>
                    </div>
                    <div>
                      <h5>
                        Toplam : {totalAmmount.toFixed(2)} ₺
                      </h5>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          )
        }
      </Container>
    </Fragment>
  );
}

export default Cart;