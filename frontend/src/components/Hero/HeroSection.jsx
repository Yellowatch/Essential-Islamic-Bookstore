import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './HeroSection.css'; // Import your custom CSS file
import imageDecoration from './islamic-decoration.png';
import './Spinner.css';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <div className="hero-section">
            <Container>
                <div className="hero-content">
                    <div className="text-content">
                        <h1 className="text-dark">{t("title")}</h1>
                        <p className="lead text-dark">
                            {t("heroLabel")}
                        </p>
                        <a href="#books" type="button" className="btn btn-outline-dark">{t("getStarted")}</a>
                    </div>
                    <div className="image-content">
                        <img className="spinning-image" src={imageDecoration} alt="Book" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;
