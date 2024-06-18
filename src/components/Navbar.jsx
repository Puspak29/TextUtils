import React from 'react';
// import PropTypes from 'prop-types';


function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-primary border-bottom border-body`} data-bs-theme='dark'>
                <div className="container-fluid">
                    <h4 style={{color: 'white'}}>{props.title}</h4>
                </div>
                <div className={`form-check form-switch text-light`}>
                    <input className="form-check-input bg-secondary" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label px-2" htmlFor="flexSwitchCheckDefault">{props.modeName}</label>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
