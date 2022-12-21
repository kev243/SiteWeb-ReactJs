import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notFound'>
            <div className="notFound-content">
            <h1>Error 4O4 page not found</h1>
            <NavLink to='/'>
                <h3>Retour à l'acceuil<i className='fas fa-home'></i></h3>
            </NavLink>
            </div>
           
        </div>
    );
};

export default NotFound;