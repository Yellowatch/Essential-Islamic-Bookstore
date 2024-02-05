import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './HeroSection.css'; // Import your custom CSS file
import imageDecoration from './islamic-decoration.png';
import './Spinner.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <Container>
                <div className="hero-content">
                    <div className="text-content">
                        <h1 className="text-dark">Essential Islamic Books</h1>
                        <p className="lead text-dark">
                            Learn Islamic foundations with simple guide books.
                        </p>
                        <a href="#books" type="button" className="btn btn-outline-dark">Get Started</a>
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
