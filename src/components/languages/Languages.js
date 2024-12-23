import React from 'react';
import Link from "../link/Link";
import "./Languages.css"

const Languages = ({path, setLanguage}) => {
    return (
        <div className="languages">
            <Link to={`${path}?lang=en`} text="English" onClick={() => setLanguage('en')}/>
            <Link to={`${path}?lang=ru`} text="Русский" onClick={() => setLanguage('ru')}/>
            <Link to={`${path}?lang=ja`} text="日本語" onClick={() => setLanguage('ja')}/>
            <Link to={`${path}?lang=hi`} text="हिन्दी" onClick={() => setLanguage('hi')}/>
            <Link to={`${path}?lang=fr`} text="Français" onClick={() => setLanguage('fr')}/>
            <Link to={`${path}?lang=it`} text="Italiano" onClick={() => setLanguage('it')}/>
            <Link to={`${path}?lang=de`} text="Deutsch" onClick={() => setLanguage('de')}/>
            <Link to={`${path}?lang=es`} text="Español" onClick={() => setLanguage('es')}/>
            <Link to={`${path}?lang=pt`} text="Português" onClick={() => setLanguage('pt')}/>
        </div>
    );
};

export default Languages;