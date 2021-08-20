import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    
    render() { 
        return ( 
        
        <header>
            <h2> the header</h2>
                <div className='links'>

                    <NavLink exact to='/'>
                        Home 
                    </NavLink>
                    <NavLink exact to='/people'>
                        All People
                    </NavLink>
                    
                    <NavLink exact to='/create'>
                        Add Person
                    </NavLink>
                </div>


        </header> );
    }
}
 
export default Header;