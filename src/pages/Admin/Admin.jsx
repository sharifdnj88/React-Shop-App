import React from 'react'
import { Col, Container, Row } from "react-bootstrap"
import "./Admin.scss"
import { Outlet, NavLink } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='admin-page'>
      <Container className='my-5'>
        <Row>
          <Col md="2">
            <div className="admin-menu">
            <ul>
              <li><NavLink to="dashboard">Dashboard</NavLink></li>
              <li><NavLink to="product">Products</NavLink></li>
              <li><NavLink to="category">Category</NavLink></li>
              <li><NavLink to="tag">Tags</NavLink></li>
              <li><NavLink to="brand">Brands</NavLink></li>
            </ul>
            </div>
          </Col>
          <Col md="10">
            <div className="admin-content">
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Admin