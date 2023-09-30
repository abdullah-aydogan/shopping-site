import React, { Fragment } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import TopNavbar from "../components/Header/TopNavbar";

function Contact() {
    
  return (
    <Fragment>
      <TopNavbar />
      <Container>
        <div className="mx-auto my-5">
          <Card>
            <Card.Header>
              <h3 className="text-center">Bizimle İletişime Geçin</h3>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-4">
                  <Form.Label>İsminiz</Form.Label>
                  <Form.Control type="text" placeholder="İsminizi giriniz..."></Form.Control>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>e-Posta Adresiniz</Form.Label>
                  <Form.Control type="email" placeholder="deneme@example.com"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Mesajınız</Form.Label>
                  <textarea className="form-control" rows={5} style={{ resize: "none" }}
                    placeholder="Mesaj yazınız..."
                  ></textarea>
                </Form.Group>
                <div className="text-center">
                  <Button type="submit" variant="success">Gönder</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </Fragment>
  );
}

export default Contact;