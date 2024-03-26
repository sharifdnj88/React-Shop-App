import React from 'react';
import "./Header.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header">
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="logo">
                            <Link to={"/"}>
                                <img className='brand-logo' src="https://bdmppa.org/assets/shop-app/logo.jpg" alt="" />
                            </Link>
                        </div>
                    </Col>
                    <Col md={9}></Col>
                </Row>
            </Container>
        </div>
  )
}

export default Header