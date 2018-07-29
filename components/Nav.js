'use strict';

import { Desktop, MobileDefault } from './Responsive';
import MobileNav from './MobileNav';
import { styles } from './nav_styles';

export default () => (
    <div>
        <Desktop>
            <div style={styles.desktop.content}>
                <div style={styles.desktop.logo}> Felicity Travel Co.</div>
                <div style={styles.desktop.links}>
                    <a href='/' style={styles.desktop.link}>Home</a>
                    <a href='/destinations' style={styles.desktop.link}>Destinations</a>
                    <a href='/about' style={styles.desktop.link}>About</a>
                    <a style={styles.desktop.link}>Free Quote</a>
                    <a style={styles.desktop.link}>Testimonials</a>
                    <a style={styles.desktop.social}>f</a>
                    <a style={styles.desktop.social}>[]</a>
                </div>
            </div>
        </Desktop>
        <MobileDefault>
            <MobileNav inheritedStyles={styles.mobile}/>
        </MobileDefault>
    </div>
);
