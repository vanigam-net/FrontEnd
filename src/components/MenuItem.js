import React from 'react';
import Search from './Search'
import { Link } from 'react-router-dom'
import { Dropdown } from 'reactstrap';
 const MenuItem = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">                 
                    <ul className="center">
                        <li><Link to="/"><i  class="material-icons">edit_location</i>Select your Address</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Product">Product</Link></li>
                        <li><Link to="/Campaign">Campaign</Link></li>  
                        <li><Link to="/Customer Service">Customer Service</Link></li>  
                        <li><Link to=""><i  class="material-icons">local_offer</i>Deals</Link></li> 

                                           
                    </ul>
                </div>
            </nav>
    )
}

export default MenuItem;