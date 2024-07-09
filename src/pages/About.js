import React from 'react';
import './About.css';
import { FaReact, FaBootstrap, FaHtml5, FaCss3Alt, FaDatabase, FaUser } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';

const About = () => {
    const fadeInStyles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={fadeInStyles} className="about-container">
            <div className="container-title">
                <h1>About Me</h1>
                <p className="subtitle">" Hello! As a junior web developer, I thrive on crafting user-friendly and innovative web experiences."</p>
            </div>
            <div className="about-content">
                <div className="text-block">
                    <h2>Contact</h2>
                    <p>For help or questions, feel free to email me, and I'll be glad to assist.</p>
                </div>
                <div className="text-block">
                    <h2>Interested in featuring junior web developers at your event?</h2>
                    <p>My specialty is in software development and emerging technologies. I look forward to contributing my insights to your event.</p>
                </div>
                <div className="text-block">
                    <h2>Want to hire me as a junior web developer?</h2>
                    <p> Feel free to book a free meeting with me to discuss your project requirements.</p>
                </div>
                <div className="recommendation-container">
                    <h2>Recommendations</h2>
                    <div className="recommendation">
                        <div className="profile">
                            <FaUser className="profile-img" style={{ fontSize: '3rem', color: '#333', border: '2px solid #333', borderRadius: '50%', padding: '5px' }} />
                            <div className="profile-info">
                                <h3>Diana D.</h3>
                                <p>Junior Web Developer</p>
                            </div>
                        </div>
                        <p className="comment">"Mae has made great progress as a junior web developer. As a tech advocate, her enthusiasm for new technologies is inspiring. She consistently produces quality code and faces challenges positively."</p>
                    </div>
                </div>
                <div className="right-side">
                    <p> As a junior web developer, small achievements can be incredibly exciting. Completing your first HTML and CSS project helps you grasp web page structure and styling. Creating a simple JavaScript app, like a to-do list, demonstrates your ability to add interactivity.</p>
                    <p> Learning React and building a basic app, like a weather forecast app, shows you can use modern frameworks. React helps you handle state and create reusable components. This experience boosts your confidence for more advanced projects.</p>
                    <p> o keep improving, work on small projects that gradually increase in difficulty. Join online communities like Stack Overflow or GitHub for advice and support. Practice regularly, follow tutorials, and learn about good coding practices. Document your work and build a portfolio to showcase your achievements.</p>
                    
                    <h2>Technologies Stack</h2>
                    <div className="technologies">
                        <div className="tech-icon-container">
                            <FaDatabase className="tech-icon" style={{ color: '#00758f' }} />
                            <span className="tech-name">Database</span>
                        </div>
                        <div className="tech-icon-container">
                            <FaHtml5 className="tech-icon" style={{ color: 'black' }} />
                            <span className="tech-name">HTML5</span>
                        </div>
                        <div className="tech-icon-container">
                            <FaBootstrap className="tech-icon" style={{ color: '#563d7c' }} />
                            <span className="tech-name">Bootstrap</span>
                        </div>
                        <div className="tech-icon-container">
                            <FaCss3Alt className="tech-icon" style={{ color: '#264de4' }} />
                            <span className="tech-name">CSS3</span>
                        </div>
                        <div className="tech-icon-container">
                            <FaReact className="tech-icon" style={{ color: '#61dafb' }} />
                            <span className="tech-name">React</span>
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
    );
}

export default About;
