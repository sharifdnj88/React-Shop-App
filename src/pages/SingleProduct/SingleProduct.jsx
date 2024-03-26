import React from 'react'
import "./SingleProduct.scss"
import {Container, Row, Col, Button} from "react-bootstrap"
import { BsSuitHeart } from "react-icons/bs";
import Product from '../../components/Product/Product';

const SingleProduct = () => {
  return (
    <div className='single-product'>
      <Container>
        <Row>
          <Col md="6">
            <div className="product-photo my-3">
              <img src="https://www.healthychildren.org/SiteCollectionImagesArticleImages/hes-up-to-no-good.jpg?RenditionID=6" alt="" />
            </div>
          </Col>
          <Col md="6">
            <div className="product-info my-3">
              <h1>Baby</h1>
              <div className="price">
                <span className='reg'>$1200</span>
                <span className='sale'>$1200</span>
              </div>
              <div className="desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia maiores deleniti necessitatibus corrupti et! Praesentium, laboriosam ipsa! Similique, sequi.</p>
              </div>
              <span className="stock">20 in Stock</span>
              <div className="cart-btn">
                <input min={1} max={1000} placeholder='1' type="number" />
                <Button className='cart-button'>Add to cart</Button>
                <Button className='wish-button'><BsSuitHeart /></Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <h1>Related Products</h1>
          </Col>
          <Col md="12">
            <div className="related-products">
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SingleProduct