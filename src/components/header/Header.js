import React, {useEffect, useState} from 'react';
import './Header.css'
import Link from "../link/Link";

const Header = ({language}) => {
    const [burger, setBurger] = useState(false)

    useEffect(() => {
        burger ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [burger])

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <Link to="/" text="Home"/>
                    <Link to={`/termsAndConditions?lang=${language}`} text="Terms and Conditions"/>
                    <Link to={`/privacyPolicy?lang=${language}`} text="Privacy policy"/>
                    <Link to="/support" text="Contacts"/>
                </nav>
                <div className="burger__block">
                    <div className={`burger__menu ${burger && "burger__color"}`} onClick={() => !burger ? setBurger(true) : setBurger(false)}/>
                    <div className={`burger__menu ${burger && "burger__color"}`} onClick={() => !burger ? setBurger(true) : setBurger(false)}/>
                    <div className={`burger__menu ${burger && "burger__color"}`} onClick={() => !burger ? setBurger(true) : setBurger(false)}/>
                    {
                        burger && <div className="burger">
                            <div className="burger__content">
                                <Link onClick={() => setBurger(false)} to="/" text="Home"/>
                                <Link onClick={() => setBurger(false)} to={`/termsAndConditions?lang=${language}`} text="Terms and Conditions"/>
                                <Link onClick={() => setBurger(false)} to={`/privacyPolicy?lang=${language}`} text="Privacy policy"/>
                                <Link onClick={() => setBurger(false)} to="/support" text="Contacts"/>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;