import React from 'react';
import TermsOfUse from "./TermsOfUse/TermsOfUse";

const TermsOfUsePage = ({setLanguage}) => {
    return (
        <div>
            <TermsOfUse setLanguage={setLanguage}/>
        </div>
    );
};

export default TermsOfUsePage;