import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';



export const Hero = () => {
    return( 
    <section className={styles.container}>
<div className={styles.content}><h1 className={styles.title}>LONEE's Portfolio</h1>
<p className={styles.description}>Gym owner and long time personal trainer turns full stack dev!</p>
<a href="mailto:myemail@email.com" target="_blank" rel="noopener noreferrer" className={styles.gitHubBtn}>Contact Me</a>
</div>
<img src={getImageUrl("hero/heroImage.jpg")} alt="Hero image" className={styles.heroImg}/>
<div className={StyleSheet.topBlur}/>
<div className={StyleSheet.bottomBlur}/>
    </section>
    );
};