'use strict';

import { merge } from '../utils';

const styles = {
    desktop: {},
    mobile : {}
}

const contentBase = {
    color: 'white',
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%'
};

styles.desktop.content = merge(contentBase, {
    lineHeight: '50px',
    margin: '25px',
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
    fontSize   : '14px',
    letterSpacing: '0.075em',
    marginRight: '20px',
    textDecoration: 'none'
};

styles.desktop.social = merge(styles.desktop.link, { marginRight: '10px' });

styles.mobile.content = merge(contentBase, {
    alignItems: 'center',
    fontSize: '12px',
    padding: '20px'
});

styles.mobile.headerItem = {
    width: '50%',
    fontWeight: 'bold',
    letterSpacing: '0.075em'
};

styles.mobile.menu = merge(contentBase, {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    paddingLeft: '20px',
    top: 40
});

styles.mobile.menuItem = {
    color: 'inherit',
    marginTop: '20px',
    textDecoration: 'none'
};

styles.mobile.hamburger = {
    width: '20px',
    height: '2px',
    backgroundColor: 'white',
    margin: '5px auto'
};

export { styles };
