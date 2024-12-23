import React from 'react';
import "./Paragraph.css"
import Link from "../link/Link";

const Paragraph = ({title, subtitle, desc, link}) => {
    return (
        <div className="paragraph">
            <h3 className="title__small">{title}</h3>
            <p className="subtitle">{subtitle} {link && <Link to="/support" text={link}/>}</p>
            {desc && <p className="subtitle">{desc}</p>}
        </div>
    );
};

export default Paragraph;