import React from 'react';
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";

const PrivacyPolicyPage = ({setLanguage}) => {
    return (
        <div>
            <PrivacyPolicy setLanguage={setLanguage}/>
        </div>
    );
};

export default PrivacyPolicyPage;