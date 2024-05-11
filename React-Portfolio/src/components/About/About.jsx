import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.container}>
        <h2 className= {styles.title}>About</h2>
        <div className={StyleSheet.content}>
            </div>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/gymIcon.png")} alt="gym icon" className={styles.aboutIcon}/>
                <div className={styles.aboutItemText}>
                    <h3>Gym Life</h3>
                <p>
Running a gym isn't just a business; it's a passion. As a gym owner, I'm committed to creating a space where people feel empowered to transform their lives through fitness. From managing operations to fostering a sense of community, every day is a chance to inspire others to reach their goals. It's a rewarding journey filled with challenges and triumphs, but seeing our members thrive makes it all worthwhile. Join us on this adventure, and let's build a healthier, stronger future together!</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="serverIcon" className={styles.aboutIcon}/>
                <div className={styles.aboutItemText}>
                    <h3>Full-Stack</h3>
                <p>Being a full stack developer is like being a digital architect, with the ability to craft solutions from top to bottom. From designing sleek user interfaces to building robust backend systems, every day brings new opportunities to innovate and problem-solve. It's a dynamic role that requires a blend of creativity and technical expertise, as well as a passion for learning and staying ahead in the ever-evolving tech landscape. As a full stack dev, I thrive on the challenge of bringing ideas to life and creating seamless digital experiences that make a difference.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/codeIcon.png")} alt="codeIcon" className={styles.aboutIcon}/>
                <div className={styles.aboutItemText}>
                    <h3>Future Projects</h3>
                <p> I'm eager to delve into projects that push the boundaries of technology, whether it's creating immersive virtual environments, developing decentralized applications on blockchain networks, or integrating IoT devices to enhance automation and efficiency. With a passion for innovation and a commitment to staying at the forefront of emerging trends, I'm ready to embark on a journey of transformative digital exploration.</p>
                </div>
            </li>
        </ul>
        </section>
    );
};