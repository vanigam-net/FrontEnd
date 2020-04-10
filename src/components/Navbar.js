import React from 'react';
import { Link } from 'react-router-dom'
import { Dropdown } from 'reactstrap';
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                <ul className="left">
                <Link to="/search"><i  class="material-icons">menu_open</i></Link> 
                </ul>
                <ul className="center">
                        <li>
                            Vanigam
                        </li>
                </ul>                
                    <ul className="right">
                        <li><Link to="/search"><i  class="material-icons">category</i></Link></li>
                        <li>
                            <input type ={Text} placeholder="search like rice"></input>
                        </li>
                        <li><Link to="/search"><i  class="material-icons">search</i></Link></li>
                        <li><Link to="/language"><i  class="material-icons">language</i></Link></li>
                        <li><Link to="/profile"><i  class="material-icons">account_box</i></Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>                        
                    </ul>
                </div>
                
            </nav>
    )
}

export default Navbar;