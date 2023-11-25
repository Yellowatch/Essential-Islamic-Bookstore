import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './HeroSection.css'; // Import your custom CSS file

const HeroSection = () => {
    return (
        <div className="hero-section py-5">
            <Container className='p-4'>
                <h1 className="display-4 text-dark">Essential Islamic Books</h1>
                <p className="lead text-dark">
                    Learn Islamic foundations with simple guide books.
                </p>
                {/* <Button variant="primary">Get Started</Button> */}
                <button type="button" class="btn btn-outline-dark">Get Started</button>
            </Container>
        </div>
    );
};

export default HeroSection;
