import React from 'react';
import "./Select.css"

const Select = ({onChange, options, disabledOpt, value}) => {
    return (
        <select value={value} className="select" onChange={onChange}>
            <option disabled className="option">{disabledOpt}</option>
            {/*{*/}
            {/*    options.map(option => {*/}
            {/*        return (*/}
            {/*            <option key={option.id} value={option.value} className="option">{option.text}</option>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
        </select>
    );
};

export default Select;