import React from 'react';
import "./Card.css"

const Card = ({src, text}) => {
    return (
        <a href="">
            <div className="home__card">
                <img className="home__img" src={src} alt=""/>
                <p className="subtitle">{text}</p>
            </div>
        </a>
    );
};

export default Card;