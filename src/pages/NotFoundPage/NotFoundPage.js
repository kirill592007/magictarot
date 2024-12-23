import React from 'react';
import Link from "../../components/link/Link";
import "./NotFoundPage.css"

const NotFoundPage = () => {
    return (
        <div className="notFound">
            <h2 className="title">You have followed the wrong URL</h2>
            <Link to="/" text="To home"/>
        </div>
    );
};

export default NotFoundPage;