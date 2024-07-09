import React from 'react';
import './Experience.css';
import { useSpring, animated } from '@react-spring/web';
import certImage1 from '../images/cert1.png'; // Import certificate images
import certImage2 from '../images/cert2.png';
import certImage3 from '../images/cert3.png';

const Experience = () => {
    const fadeInStyles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={fadeInStyles} className="experience-container">
            <div className="certifications-container">
                <h1 className="section-title">Certifications</h1>
                <div className="certification">
                    <div className="certification-item">
                        <h3>Bookkeeping NC III</h3>
                        <p>Certificate of Completion This is to Certify that Hon.Mae T. Alera has completed the BOOKKEEPING COURSE FOR SK TREASURERS NC III Holder.</p>
                        <img src={certImage1} alt="Bookkeeping NC III Certificate" className="cert-image" />
                    </div>
                    <div className="certification-item">
                        <h3>Certificate of Participation</h3>
                        <p>For actively Participating in a Webinar on BUDGETING 101 FOR SK OFFICIALS.</p>
                        <img src={certImage2} alt="Budgeting 101 Certificate" className="cert-image" />
                    </div>
                    <div className="certification-item">
                        <h3>Certificate of Participation</h3>
                        <p>For actively Participating in a Webinar on GAD GAVE ME YOU: Creating GAD-Responsive Programs and Policies For Sanguniang.</p>
                        <img src={certImage3} alt="GAD Webinar Certificate" className="cert-image" />
                    </div>
                </div>
            </div>
            <h1 className="section-title">Experience</h1>
            <div className="experience-content">
                <div className="experience-item">
                    <div className="year-tag">2023</div>
                    <div className="job">
                        <h2>On the Job Training</h2>
                        <p>LGU Mabinay | October 2, 2023</p>
                        <p>Assisted in managing the municipality's IT infrastructure.</p>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="year-tag">2023</div>
                    <div className="job">
                        <h2>Elected as SK Chairman of our Barangay</h2>
                        <p>Brgy.Pandanon Mabinay Negros Oriental | October 30, 2023</p>
                        <p>Elected as SK Chairman of our barangay, demonstrating leadership and community engagement.</p>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="year-tag">2023</div>
                    <div className="job">
                        <h2>Elected as SK Federated SK Treasurer</h2>
                        <p>SK FEDERATION MUNICIPALITY OF MABINAY| November 14,2023</p>
                        <p>Elected as SK Federated Treasurer of the Municipality of Mabinay, managing funds and overseeing financial operations for youth projects.






</p>
                    </div>
                </div>
            </div>
        </animated.div>
    );
}

export default Experience;
