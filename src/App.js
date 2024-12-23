import React, {useEffect, useState} from 'react';
import HomePage from "./pages/HomePage/HomePage";
import {Routes, Route, useLocation, useSearchParams} from "react-router-dom"
import Header from "./components/header/Header";
import TermsOfUsePage from "./pages/TermsOfUsePage/TermsOfUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import Footer from "./components/footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SupportPage from "./pages/SupportPage/SupportPage";
import {useTranslation} from "react-i18next";

const App = () => {
    const [language, setLanguage] = useState('')
    const location = useLocation()
    const [searchParams] = useSearchParams()
    const {i18n} = useTranslation()

    const titles = {
        "/": "Mystic Arcana - Tarot predictions",
        "/termsAndConditions": "Mystic Arcana - Terms of Use",
        "/privacyPolicy": "Mystic Arcana - Privacy Policy",
        "/support": "Mystic Arcana - Support"
    }

    const truePaths = ["/", "/termsAndConditions", "/privacyPolicy", "/support"];
    const shouldShow = truePaths.includes(location.pathname);

    useEffect(() => {
        document.title = titles[location.pathname];
    }, [location, titles]);

    useEffect(() => {
        i18n.changeLanguage(searchParams.get('lang') || 'en')
    }, [language, i18n, searchParams])
  return (
      <div className="app">
          {
              shouldShow && <Header language={language}/>
          }
          <Routes>
              <Route path="*" element={<NotFoundPage/>}/>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/termsAndConditions" element={<TermsOfUsePage setLanguage={setLanguage}/>}/>
              <Route path="/privacyPolicy" element={<PrivacyPolicyPage setLanguage={setLanguage}/>}/>
              <Route path="/support" element={<SupportPage/>}/>
          </Routes>
          {
              shouldShow && <Footer language={language}/>
          }
      </div>
  );
};

export default App;
