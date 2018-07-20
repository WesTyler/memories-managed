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
            <div style={navStyle}>
                <div style={linkHolderStyle}>
                    <a style={mobileLinkStyle}>Only</a>
                </div>
            </div>
        </MobileDefault>
    </div>
);
