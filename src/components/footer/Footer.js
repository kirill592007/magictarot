import React from 'react';
import Link from "../link/Link";
import "./Footer.css"

const Footer = ({language}) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <Link to="/" text="Home"/>
                    <Link to={`/termsAndConditions?lang=${language}`} text="Terms and Conditions"/>
                    <Link to={`/privacyPolicy?lang=${language}`} text="Privacy policy"/>
                    <Link to="/support" text="Contacts"/>
                </div>
                <p className="subtitle__small">© 2024 Mystic Arcana. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;