'use strict';

import { merge } from '../utils';

const styles = {};

styles.getHamburgerStyles = (active) => {
    const burgers = {};

    if (active) {
        burgers.top = merge(hamburgerTop, {
            transform: 'rotate(-45deg) translate(-6px, 6px)'
        });
        burgers.inner = merge(hamburgerInner, {
            opacity: 0
        });
        burgers.bottom = merge(hamburgerBottom, {
            transform: 'rotate(45deg) translate(-11px, -11px)'
        });
    } else {
        burgers.top = hamburgerTop
        burgers.inner = hamburgerInner;
        burgers.bottom = hamburgerBottom;
    }

    return burgers;
};

styles.hamburger = {
    backgroundColor: 'transparent',
    border: 0,
    display: 'inline-block',
    outline: 'none',
    padding: '15px'
};

styles.hamburgerBox = {
    display: 'inline-block',
    height: '24px',
    position: 'relative',
    width: '40px'
};

const psuedoClass = {
    backgroundColor: '#fff',
    borderRadius: '4px',
    content: '',
    display: 'block',
    height: '4px',
    position: 'absolute',
    transition: '0.4s',
    width: '40px'
};

const hamburgerBottom = merge(psuedoClass, {
    bottom: -5,
    display: 'block',
    marginTop: '-2',

});
const hamburgerInner = merge(psuedoClass, {
    display: 'block',
    top: '50%',
    marginTop: '-2'
});
const hamburgerTop = merge(psuedoClass, {
    display: 'block',
    marginTop: '-2',
});

export { styles };