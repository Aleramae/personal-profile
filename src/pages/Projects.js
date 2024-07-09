import React from 'react';
import './Projects.css'; // Assuming you have a Projects.css for styling
import colloquiumImage from '../images/Colloquium.png'; // Importing your project image
import MaesShoeCollectionImage from '../images/dashboard.png'; // Importing your project image
import loginImage from '../images/log-in.png'; // Importing your project image
import { useSpring, animated } from '@react-spring/web';

const Projects = () => {
    const fadeInStyles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={fadeInStyles} className="projects-container">
            <div className="container-title">
                <h1>Projects</h1>
                <p className="subtitle">Explore my projects</p>
            </div>
            <div className="projects-content">
                    <div className="project-side">
                        <div className="project-card dark-bg">
                            <div className="project-info">
                                <h2>Colloquium Poster Contest</h2>
                            </div>
                            <div className="project-image zoom">
                                <img src={colloquiumImage} alt="Dashboard Project" />
                            </div>
                        </div>
                    </div>
                    <div className="project-side">
                        <div className="project-card dark-bg">
                            <div className="project-info">
                                <h2>Github Project</h2>
                            </div>
                            <div className="project-image zoom">
                                <img src={MaesShoeCollectionImage} alt="Dashboard Project" />
                            </div>
                        </div>
                    </div>
                    <div className="project-side">
                        <div className="project-card dark-bg">
                            <div className="project-info">
                                <h2>Inventory Control System</h2>
                            </div>
                            <div className="project-image zoom">
                                <img src={loginImage} alt="Dashboard Project" />
                            </div>
                        </div>
                    </div>
            </div>
        </animated.div>
    );
}

export default Projects;
