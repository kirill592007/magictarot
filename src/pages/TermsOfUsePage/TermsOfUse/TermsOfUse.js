import React from 'react';
import {useTranslation} from "react-i18next";
import "./TermsOfUse.css"
import Paragraph from "../../../components/paragraph/Paragraph";
import Languages from "../../../components/languages/Languages";

const TermsOfUse = ({setLanguage}) => {
    const {t} = useTranslation()

    return (
        <div className="termsOfUse">
            <div className="container">
                <Languages setLanguage={setLanguage} path="/termsAndConditions"/>
                <h2 className="title">{t('termsOfUse')}</h2>
                <div className="termsOfUse__content">
                    <Paragraph title={t('Introduction')} subtitle={t('IntroductionTermsOfUseFirstDesc')} desc={t('IntroductionTermsOfUseSecondDesc')}/>
                    <Paragraph title={t('RegAndAcc')} subtitle={t('RegAndAccFirstDesc')} desc={t('RegAndAccSecondDesc')}/>
                    <Paragraph title={t('AccessibilityAndRestrictions')} subtitle={t('AccessibilityAndRestrictionsFirstDesc')} desc={t('AccessibilityAndRestrictionsSecondDesc')}/>
                    <Paragraph title={t('ServiceDescription')} subtitle={t('ServiceDescriptionFirstDesc')} desc={t('ServiceDescriptionSecondDesc')}/>
                    <Paragraph title={t('PaymentsSubscriptionsAndRefunds')} subtitle={t('PaymentsSubscriptionsAndRefundsFirstDesc')} desc={t('PaymentsSubscriptionsAndRefundsSecondDesc')}/>
                    <Paragraph title={t('DataDeletionTermsOfUse')} subtitle={t('DataDeletionTermsOfUseDesc')}/>
                    <Paragraph title={t('LimitationOfLiability')} subtitle={t('LimitationOfLiabilityFirstDesc')} desc={t('LimitationOfLiabilitySecondDesc')}/>
                    <Paragraph title={t('ChangesToTerms')} subtitle={t('ChangesToTermsDesc')}/>
                    <Paragraph title={t('ContactInformationTermsOfUse')} subtitle={t('ContactInformationTermsOfUseDesc')} link={t('support')}/>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;