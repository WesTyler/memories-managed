'use strict';

import { Desktop, MobileDefault } from './Responsive';

const navStyle = {
    backgroundColor: 'white',
    height         : 50,
    marginLeft     : 0,
    position       : 'fixed',
    textAlign      : 'center',
    top            : 25,
    width          : '100%'
};
const mobileNavStyle = Object.assign({}, navStyle, { top: 0 })

const linkHolderStyle = {
    margin    : 'auto',
    paddingTop: '15.5px',
    width     : '75%',
};

const linkStyle = {
    marginLeft: '50px',
    width     : '100px'
};

const mobileLinkStyle = {
    marginLeft: 0,
    width     : '75px'
};

const ctaBarStyle = Object.assign({}, mobileNavStyle, {
    backgroundColor: 'grey',
    top: 50
});

const ctaHolderStyle = Object.assign({}, linkHolderStyle, {
    display: 'flex',
    paddingTop: '15px',
    width     : '100%'
});

const ctaStyle = {
    backgroundColor: 'grey',
    display: 'inline-block',
    height: '18px',
    width: '40%'
};

const ctaHamburger = Object.assign({}, ctaStyle, {
    width: '20%'
});

const hamburger = {
    width: '30px',
    height: '2px',
    backgroundColor: 'black',
    margin: '3px auto'
};

export default () => (
    <div>
        <Desktop>
            <div style={navStyle}>
                <div style={linkHolderStyle}>
                    <a style={linkStyle}>Home</a>
                    <a style={linkStyle}>About</a>
                    <a style={linkStyle}>Blog</a>
                    <a style={linkStyle}>Contact</a>
                </div>
            </div>
        </Desktop>
        <MobileDefault>
            <div style={mobileNavStyle}>
                <div style={linkHolderStyle}>
                    <a style={mobileLinkStyle}>Memories Managed</a>
                </div>
            </div>
            <div style={ctaBarStyle}>
                <div style={ctaHolderStyle}>
                    <div style={ctaStyle}>About</div>
                    <div style={ctaStyle}>Contact</div>
                    <div style={ctaHamburger}>
                        <div style={hamburger}></div>
                        <div style={hamburger}></div>
                        <div style={hamburger}></div>
                    </div>
                </div>
            </div>
        </MobileDefault>
    </div>
);
