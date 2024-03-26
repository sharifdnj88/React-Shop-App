import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import "./Product.scss"
import ProductViewModal from '../ProductViewModal/ProductViewModal'
import { Link } from "react-router-dom"

const Product = () => {
    const [show, setShow] = useState(false);
  return (
    <div className="product-item">
        <ProductViewModal show={show} onHide={() => setShow(false)} />
        <Card className='text-center'>
            <Link to={"/dshbf"}>
            <Card.Img className='product-item-img m-auto p-1' src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/f21_pro/navigation/v2/Navigation-SunsetOrange-427_600-pc.png.thumb.webp"></Card.Img></Link>
            <Card.Body>
                <Card.Title className="text-center">Samsung S23</Card.Title>
                <div className="pricing">
                    <span className='regular'>$1200</span>&nbsp;
                    <span className='sale'>$900</span>
                </div>
                <div className="product-button d-block">
                    <Button className='add-cart-btn'>Cart</Button>&nbsp;
                    <Button variant="info" onClick={() => setShow(true)}>View</Button>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Product