import React from 'react';
import { getImageUrl } from '../../utils';


export const Hero = () => {
    return <section>
<div><h1>LONEE's Portfolio</h1>
<p>Gym owner and long time personal trainer turns full stack dev!</p>
<a href="https://google.com" target="_blank" rel="noopener noreferrer"> My GitHub</a>
</div>
<img src={getImageUrl("hero/heroImage.png")} alt="Hero image" />

    </section>;
};