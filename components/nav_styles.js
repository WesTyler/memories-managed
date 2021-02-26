'use strict';

import { merge } from '../utils';

const styles = {
    desktop: {},
    mobile : {}
}

const contentBase = {
    color: 'black',
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%'
};

styles.desktop.content = merge(contentBase, {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '50px',
    padding: '10px 25px 0',
    zIndex: 999
});

styles.desktop.logo = {
    fontSize: '20px',
    width: '40%'
};

styles.desktop.links = {
    position : 'absolute',
    right    : 0,
    textAlign: 'center',
    width    : '60%'
};

styles.desktop.link = {
    color: 'inherit',
    fontWeight: 'bold',
    fontSize   : '14px',
    letterSpacing: '0.075em',
    marginRight: '20px',
    textDecoration: 'none'
};

styles.desktop.social = merge(styles.desktop.link, { marginRight: '10px' });

styles.mobile.content = merge(contentBase, {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fontSize: '12px',
    padding: '20px',
    zIndex: 1
});

styles.mobile.headerItem = {
    width: '50%',
    fontWeight: 'bold',
    letterSpacing: '0.075em'
};

styles.mobile.menu = merge(contentBase, {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '15px',
    top: 96,
    zIndex: 10
});

styles.mobile.menuItem = {
    color: 'inherit',
    marginTop: '20px',
    textDecoration: 'none'
};

styles.mobile.hamburger = {
    width: '20px',
    height: '2px',
    backgroundColor: 'black',
    margin: '5px auto'
};

export { styles };
