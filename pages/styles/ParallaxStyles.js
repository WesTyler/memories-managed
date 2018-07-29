'use strict';

import { merge } from '../../utils';

const parallax = {};

parallax.container = {
    perspective: '1px',
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'auto'
};

const parallaxBase = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
};

parallax.parallaxFront = merge(parallaxBase, {
    transform: 'translateZ(0)',
    width: '100%'
});

parallax.parallaxBack = merge(parallax.img, parallaxBase, {
    transform: 'translateZ(-6px) scale(7)'
});

export default parallax;
