import React from 'react';
import images from "./Images";
import Card from "./Card/Card";
import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="aboutUs">
                    <h2 className="title">About Us</h2>
                    <p className="subtitle">Welcome to Mystic Arcana — a unique Tarot card reading application designed to help you better understand yourself, your emotions, and life situations.</p>
                    <p className="subtitle">Our app combines the traditions of Tarot with modern technology, making the process of reading Tarot cards accessible, convenient, and engaging. We offer:</p>
                    <ul className="aboutUs__list">
                        <li className="list__item"><p className="subtitle">Personalized spreads: Choose a theme for your reading, whether it’s love, career, finances, or self-discovery.</p></li>
                        <li className="list__item"><p className="subtitle">Individual focus: Specify who or what you want to focus on to receive accurate and relevant answers.</p></li>
                        <li className="list__item"><p className="subtitle">Special coins: To perform a reading, you can purchase virtual coins, available through card or e-wallet payments.</p></li>
                    </ul>
                    <p className="subtitle">Mystic Arcana is created for those seeking answers to important questions, inspiration, or simply looking to explore the fascinating world of Tarot cards. Join us, and let the cards reveal new horizons for you!</p>
                </div>
                <div className="home__content">
                    <h3 className="title__small">Major Arcana</h3>
                    <div className="home__cards">
                        {
                            images[0].arcana.map(item => {
                                return (
                                    <Card src={item.image} text={item.text} key={item.id}/>
                                )
                            })
                        }
                    </div>
                    <h3 className="title__small">Cups</h3>
                    <div className="home__cards">
                        {
                            images[0].cups.map(item => {
                                return (
                                    <Card src={item.image} text={item.text} key={item.id}/>
                                )
                            })
                        }
                    </div>
                    <h3 className="title__small">Pentacles</h3>
                    <div className="home__cards">
                        {
                            images[0].pentacles.map(item => {
                                return (
                                    <Card src={item.image} text={item.text} key={item.id}/>
                                )
                            })
                        }
                    </div>
                    <h3 className="title__small">Swords</h3>
                    <div className="home__cards">
                        {
                            images[0].swords.map(item => {
                                return (
                                    <Card src={item.image} text={item.text} key={item.id}/>
                                )
                            })
                        }
                    </div>
                    <h3 className="title__small">Wands</h3>
                    <div className="home__cards">
                        {
                            images[0].wands.map(item => {
                                return (
                                    <Card src={item.image} text={item.text} key={item.id}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;