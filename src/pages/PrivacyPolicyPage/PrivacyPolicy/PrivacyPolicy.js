import React from 'react';
import {useTranslation} from "react-i18next";
import Paragraph from "../../../components/paragraph/Paragraph";
import ParagraphWithList from "../../../components/paragraphWithList/ParagraphWithList";
import "./PrivacyPolicy.css"
import Languages from "../../../components/languages/Languages";

const PrivacyPolicy = ({setLanguage}) => {
    const {t} = useTranslation()

    return (
        <div className="privacyPolicy">
            <div className="container">
                <Languages setLanguage={setLanguage} path="/privacyPolicy"/>
                <h2 className="title">{t('privacyPolicy')}</h2>
                <div className="privacyPolicy__content">
                    <Paragraph title={t('Introduction')} subtitle={t('IntroductionPrivacyPolicyDesc')}/>
                    <ParagraphWithList title={t('InformationWeCollect')} subtitle={t('InformationWeCollectDesc')} list={[{desc: t('InformationWeCollectListFirstDesc')}, {desc: t('InformationWeCollectListSecondDesc')}, {desc: t('InformationWeCollectListThirdDesc')}, {desc: t('InformationWeCollectListFourthDesc')}]}/>
                    <ParagraphWithList title={t('HowWeUseYourData')} subtitle={t('HowWeUseYourDataDesc')} list={[{desc: t('HowWeUseYourDataListFirstDesc')}, {desc: t('HowWeUseYourDataListSecondDesc')}, {desc: t('HowWeUseYourDataListThirdDesc')}, {desc: t('HowWeUseYourDataListFourthDesc')}]}/>
                    <Paragraph title={t('DataStorage')} subtitle={t('DataStorageDesc')}/>
                    <Paragraph title={t('DataSharing')} subtitle={t('DataSharingDesc')}/>
                    <Paragraph title={t('DataDeletionPrivacyPolicy')} subtitle={t('DataDeletionPrivacyPolicyDesc')}/>
                    <Paragraph title={t('DataSecurity')} subtitle={t('DataSecurityDesc')}/>
                    <ParagraphWithList title={t('UserRights')} subtitle={t('UserRightsFirstDesc')} list={[{desc: t('UserRightsListFirstDesc')}, {desc: t('UserRightsListSecondDesc')}, {desc: t('UserRightsListThirdDesc')}]} desc={t('UserRightsSecondDesc')}/>
                    <Paragraph title={t('ChangesToPrivacyPolicy')} subtitle={t('ChangesToPrivacyPolicyDesc')}/>
                    <Paragraph title={t('ContactInformationPrivacyPolicy')} subtitle={t('ContactInformationDescPrivacyPolicy')} link={t('support')}/>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;