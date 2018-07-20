'use strict';

import { Desktop, MobileDefault } from './Responsive';

const styles = {}

styles.nav = {
    backgroundColor: 'white',
    height         : 50,
    marginLeft     : 0,
    position       : 'fixed',
    textAlign      : 'center',
    top            : 25,
    width          : '100%'
};

styles.mobileNav = Object.assign({}, styles.nav, { top: 0 })

styles.linkHolder = {
    margin    : 'auto',
    paddingTop: '15.5px',
    width     : '75%',
};

styles.link = {
    marginLeft: '50px',
    width     : '100px'
};

styles.mobileLink = {
    marginLeft: 0,
    width     : '75px'
};

styles.ctaBar = Object.assign({}, styles.mobileNav, {
    backgroundColor: 'grey',
    top: 50
});

styles.ctaHolder = Object.assign({}, styles.linkHolder, {
    display: 'flex',
    paddingTop: '15px',
    width     : '100%'
});

styles.cta = {
    backgroundColor: 'grey',
    display: 'inline-block',
    height: '18px',
    width: '40%'
};

styles.ctaHamburger = Object.assign({}, styles.cta, {
    width: '20%'
});

styles.hamburger = {
    width: '30px',
    height: '2px',
    backgroundColor: 'black',
    margin: '3px auto'
};

export default () => (
    <div>
        <Desktop>
            <div style={styles.nav}>
                <div style={styles.linkHolder}>
                    <a style={styles.link}>Home</a>
                    <a style={styles.link}>About</a>
                    <a style={styles.link}>Blog</a>
                    <a style={styles.link}>Contact</a>
                </div>
            </div>
        </Desktop>
        <MobileDefault>
            <div style={styles.mobileNav}>
                <div style={styles.linkHolder}>
                    <a style={styles.mobileLink}>Memories Managed</a>
                </div>
            </div>
            <div style={styles.ctaBar}>
                <div style={styles.ctaHolder}>
                    <div style={styles.cta}>About</div>
                    <div style={styles.cta}>Contact</div>
                    <div style={styles.ctaHamburger}>
                        <div style={styles.hamburger}></div>
                        <div style={styles.hamburger}></div>
                        <div style={styles.hamburger}></div>
                    </div>
                </div>
            </div>
        </MobileDefault>
    </div>
);
