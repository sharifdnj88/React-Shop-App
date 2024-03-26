import React from 'react'
import { Button, Modal, ModalBody, ModalHeader } from 'react-bootstrap'
import "./ProductViewModal.scss"

const ProductViewModal = ({show, onHide}) => {
  return (
    <>
        <Modal show={show} onHide={onHide} centered size='lg'>
            <ModalHeader closeButton>
                <h3>Single Product</h3>
            </ModalHeader>
            <ModalBody>
                <div className="product-quick-view">
                    <div className="product-photo">
                        <img src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/f21_pro/navigation/v2/Navigation-SunsetOrange-427_600-pc.png.thumb.webp" alt="" />
                    </div>
                    <div className="product-details">
                        <h2>Samsung S23</h2>
                        <hr/>
                        <div className="view-pricing">
                            <span className='regular_price'>$1200</span>
                            <span className='sale_price'>$900</span>
                        </div>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ullam.</p>
                        <div className="view-btn">
                            <Button>Add to Cart</Button>
                        </div>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    </>
  )
}

export default ProductViewModal