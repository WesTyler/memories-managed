'use strict';

import React from 'react';
import Router from 'next/router';

const styles = {};

styles.destination = {
    display: 'inline-block',
    height: '100vh',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    width: '25%'
};

styles.onHover = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    height: '100vh',
    position: 'absolute',
    width: '100%',
    zIndex: 10
};

styles.title = {
    color: 'white',
    display: 'inline-block',
    fontSize: '2vw',
    marginTop: '50vh',
    textAlign: 'center',
    width: '100%',
    wordSpacing: '100vw'
};

styles.destinationImage = {
    marginLeft: '50%',
    transform : 'translateX(-50%)'
};

export default class Destination extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.state || {
            hover: false
        };
    }

    linkTo = (route) => {
        return () => Router.push(`/destinations/${route}`);
    };

    mouseEnter() {
        this.setState({ hover: true });
    }

    mouseExit() {
        this.setState({ hover: false });
    }

    render() {
        const {
            destination,
            imageSrc,
            title
        } = this.props;

        return (
            <div
                onClick={this.linkTo(destination)}
                onMouseEnter={this.mouseEnter.bind(this)}
                style={styles.destination}
            >
                <div
                    onMouseLeave={this.mouseExit.bind(this)}
                    onClick={this.linkTo(destination)}
                    style={
                        this.state.hover ? styles.onHover : { display: 'none' }
                    }
                >
                    <span
                        style={styles.title}
                    >{title}</span>
                </div>
                <img style={styles.destinationImage} src={imageSrc} />
            </div>
        );
    }
};