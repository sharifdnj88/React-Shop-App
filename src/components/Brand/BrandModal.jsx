import React, { useState } from 'react'
import { Button, Form, Modal, ModalBody, ModalHeader } from "react-bootstrap"
import "./Brand.scss"
import { useDispatch } from 'react-redux'
import { createBrands } from '../../redux/Shop/actions'

const BrandModal = ({show, onHide, setModal}) => {
  const [input, setInput] = useState("");
  const [logo, setLogo] = useState(null);  
  const dispatch = useDispatch();

  const handleLogoUpload = (e) => {
    setLogo(e.target.files[0]);
  }

  const handleBrandCreate = async (e) => {
    e.preventDefault();

    const form_data = new FormData();

    form_data.append("name", input);
    form_data.append("brand-photo", logo);
    
    dispatch(createBrands({ data: form_data, setModal, setInput, setLogo}));
    e.target.reset();

  }

  return (
    <div>
        <Modal show={show} onHide={onHide} centered>
            <ModalHeader closeButton>Add new Brand</ModalHeader>
            <ModalBody>
            <Form onSubmit={handleBrandCreate} className='brand-form'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter your brand name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Photo</Form.Label>
                <Form.Control onChange={handleLogoUpload} type="file" placeholder="Password" />
                { logo && <img className='my-2' style={{ maxWidth: "100%", maxHeight: "200px" }} src={URL.createObjectURL(logo)} alt="" /> }
              </Form.Group>
              <Button className='add-brand-btn' variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </ModalBody>
        </Modal>
    </div>
  )
}

export default BrandModal