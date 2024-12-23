import React from 'react';

const ParagraphWithList = ({title, subtitle, list, desc}) => {
    return (
        <div className="paragraph">
            <h3 className="title__small">{title}</h3>
            <p className="subtitle">{subtitle}</p>
            <ul className="paragraph__list">
                {
                    list.map((item, index)=> {
                        return <li key={index} className="list__item"><p className="subtitle">{item.desc}</p></li>
                    })
                }
            </ul>
            {desc && <p className="subtitle">{desc}</p>}
        </div>
    );
};

export default ParagraphWithList;