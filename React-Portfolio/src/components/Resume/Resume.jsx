import React from 'react';

import styles from './Resume.module.css';



export const Resume = () => {
    return( 
    <section className={styles.container}>
<div className={styles.content}><h1 className={styles.title}>Resume</h1>
<p className={styles.description}>Attatched come Copy of my Resume!</p>
<a href="https://docs.google.com/document/d/1Q_MiOcWen_Kn9iCxz_zUdW7gFSLtC3gRaz60laqEHEo/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.gitHubBtn}>Resume</a>
</div>
<div className={StyleSheet.topBlur}/>
<div className={StyleSheet.bottomBlur}/>
    </section>
    );
};