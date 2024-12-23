import React from 'react';
import {NavLink} from "react-router-dom";
import './Link.css'

const Link = ({to, text, onClick, value}) => {
    return (
        <NavLink onClick={onClick} to={to} className="link">{text}</NavLink>
    );
};

export default Link;