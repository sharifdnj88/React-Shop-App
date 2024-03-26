import React, { useState } from 'react'
import BrandModal from './BrandModal'
import { Button, Form, Table } from 'react-bootstrap'
import { TbPlus } from "react-icons/tb"
import { BiEdit } from "react-icons/bi"
import { BsFillTrashFill } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { deleteBrand } from '../../redux/Shop/actions'
import swal from 'sweetalert'


const Brand = () => {
    const { brands } = useSelector((state) => state.shop);
    const [modal, setModal] = useState(false);    
    const [status, setStatus] = useState(true);
    const dispatch = useDispatch();

    const handleBrandDelete = (id) => {      
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteBrand(id));
          swal("Done! Your data has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your data is safe!", { icon: "success" });
        }
      });
    }
    
  return (
    <div className='table-content py-3'>
        <div className="table-content-header">
            <h2>Brands</h2>
            <button onClick={() => setModal(true)}><TbPlus /> Create new brand</button>
        </div>
        <div className="table-content-list">
           <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Logo</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                
                { brands.map((item, index) => {
                    return (
                      <tr className='align-middle' key={index}>
                      <td>{ index + 1 }</td>
                      <td>{item.name}</td>
                      <td>
                        <img style={{width: "50px", height: "50px", objectFit: "cover"}} src={`http://localhost:5050/brands/${item.photo}`} alt="" />
                      </td>
                      <td>
                        <Form.Check type="switch" id="custom-switch" onChange={() => setStatus(!status)}
                          label={ status ? "Published" : "Unpublished" } checked={status}
                        />
                      </td>
                      <td>
                        <Button className='btn-sm' variant='warning'><BiEdit /></Button>&nbsp;
                        <Button onClick={() => handleBrandDelete(item._id)} className='btn-sm' variant='danger'><BsFillTrashFill /></Button>
                      </td>
                    </tr>
                    );
                })}                 

              </tbody>
           </Table>
        </div>
        <BrandModal setModal={setModal} show={modal} onHide={() => setModal(false)} />
    </div>
  )
}

export default Brand