'use strict';

import React from 'react';
import { merge } from '../utils';
import { styles } from './mobile_styles';

export default class MobileNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.state || {
            displayMenu: false
        };
    }

    handleClick() {
        this.setState({
            displayMenu: !this.state.displayMenu
        });
    }

    render() {
        const {inheritedStyles} = this.props;
        const hamburgerContainer = merge(inheritedStyles.headerItem, {
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '40px'
        });
        const navFill = {};

        if (this.state.displayMenu) {
            navFill.height = '100vh';
            navFill.width = '100%';
            navFill.backgroundColor = 'rgba(0, 59, 129, 0.9)';
            navFill.position = 'absolute';
        }

        const hamburgerStyles = styles.getHamburgerStyles(this.state.displayMenu);

        return (
            <div style={navFill}>
                <div style={inheritedStyles.content}>
                    <div style={inheritedStyles.headerItem}>
                        <a>Felicity Travel Co.</a>
                    </div>
                    <div style={hamburgerContainer}>
                        <button 
                        type='button'
                        onClick={this.handleClick.bind(this)}
                        style={styles.hamburger}
                        >
                            <span style={styles.hamburgerBox}>
                                <span style={hamburgerStyles.top}></span>
                                <span style={hamburgerStyles.inner}></span>
                                <span style={hamburgerStyles.bottom}></span>
                            </span>
                        </button>
                    </div>
                </div>
                {
                    this.state.displayMenu && (
                        <div>
                            <div style={inheritedStyles.menu}>
                                <a href='/' style={inheritedStyles.menuItem}>Home</a>
                                <a href='/destinations' style={inheritedStyles.menuItem}>Destinations</a>
                                <a style={inheritedStyles.menuItem}>Blog</a>
                                <a style={inheritedStyles.menuItem}>Free Quote</a>
                                <a style={inheritedStyles.menuItem}>Testimonials</a>
                            </div>
                            <div style={{
                                width: '100vw',
                                height: 'calc(100vh - 96px)',
                                position: 'absolute',
                                top: '96px',
                                zIndex: 9
                            }}
                            onClick={this.handleClick.bind(this)}
                            ></div>
                        </div>
                    )
                }
            </div>
        );
    }
};
