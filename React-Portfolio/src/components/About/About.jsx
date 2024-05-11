import React from 'react';
import { getImageUrl } from '../../utils';

export const About = () => {
    return (
        <section>
        <h2>About</h2>
        <div><img src={getImageUrl("about/aboutImage.jpg")} alt="healthylifestlye" /></div>
        <ul>
            <li>
                <img src={getImageUrl("about/gymIcon.png")} alt="gym icon" />
                <div>
                    <h3>Gym Life</h3>
                <p>blah</p>
                </div>
            </li>
            <li>
                <img src={getImageUrl("about/serverIcon.png")} alt="serverIcon" />
                <div>
                    <h3>Full-Stack</h3>
                <p>Blagh</p>
                </div>
            </li>
            <li>
                <img src={getImageUrl("about/codeIcon.png")} alt="codeIcon" />
                <div>
                    <h3>Future Projects</h3>
                <p>Blah</p>
                </div>
            </li>
        </ul>
        </section>
    );
};