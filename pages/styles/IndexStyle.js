'use strict';

import { merge } from '../../utils';

const styles = {};

styles.img = {
    display    : 'block',
    width: '100%'
};

styles.mobileImg = Object.assign({ width: '100%'}, styles.img);

styles.p = {
    textAlign: 'center'
};

styles.parallax = {
    perspective: '1px',
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'auto'
};

styles.parallaxBase = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
};

styles.parallaxFront = merge(styles.parallaxBase, {
    height: '320px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    transform: 'translateZ(0)',
    top: '575px'
});

styles.parallaxBack = merge(styles.img, styles.parallaxBase, {
    transform: 'translateZ(-6px) scale(7)'
});

styles.definition = {
    margin: '-20px auto 10px',
    padding: '5px',
    textAlign: 'center',
    width: '75%'
};

styles.definitionPhonetic = {
    fontFamily: 'serif',
    fontSize: '28px',
    letterSpacing: '0.09em'
};

styles.definitionMeta = {
    color: '#83a8c0'
};

styles.definitionMain = {
    fontFamily: 'Merriweather'
};

styles.definitionDecoration = merge(styles.definitionMain, {
    fontStyle: 'italic'
});

styles.mission = {
    fontFamily: 'Oswald',
    fontSize: '36px',
    fontWeight: 'light',
    letterSpacing: '0.075em',
    margin: '10px auto',
    padding: '5px',
    textAlign: 'center',
    width: '75%'
};

export default styles;
