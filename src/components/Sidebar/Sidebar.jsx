import React from 'react'
import "./Sidebar.scss"
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
   <>
     <div className='sidebar-area'>
        <div className="sidebar-widget">
            <div className="widget-title">
                <h3>Search Product</h3>
                <hr/>
                <input type="search" placeholder='search...' className='form-control' />
            </div>
            <div className="widget-title my-3">
                <h3>Categories</h3>
                <hr/>
                <ul className='list'>
                    <li>
                        <label>
                            <input type="checkbox" /> Men
                        </label>                        
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> Women
                        </label>                        
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> Fashion
                        </label>                        
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> Panjabi
                        </label>                        
                    </li>
                </ul>
            </div>
            <div className="widget-title my-3">
                <h3>Brands</h3>
                <hr/>
                <ul className='list'>
                    <li>
                        <label>
                            <input type="checkbox" /> Men
                        </label>                        
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> Women
                        </label>                        
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> Fashion
                        </label>                        
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> Panjabi
                        </label>                        
                    </li>
                </ul>
            </div>
            <div className="sidebar-widget">
              <div className="widget-title my-3">
                  <h3>Tags</h3>
                  <hr/>
                  <div className="tags-items">
                      <NavLink to={"/"}>EID</NavLink>
                      <NavLink to={"/"}>PUJA</NavLink>
                      <NavLink to={"/"}>BOISAKHE</NavLink>
                      <NavLink to={"/"}>CORONA</NavLink>
                      <NavLink to={"/"}>EID</NavLink>
                  </div>
              </div>
            </div>
            <div className="sidebar-widget">
              <div className="widget-title my-3">
                  <h3>Search product</h3>
                  <hr/>
                  <div className="price-search">
                      <input type="text" placeholder='Min' />
                      <input type="text" placeholder='Max' />
                      <button>Search</button>
                  </div>
              </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Sidebar