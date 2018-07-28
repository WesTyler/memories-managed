'use strict';

import React from 'react';

import { Desktop, Tablet, Mobile } from '../components/Responsive';
import Destination from '../components/Destination';
import Layout from '../layouts/Main';
import { merge } from '../utils';

const disneyworld = '../static/destinations_disneyworld.jpg';
const disneyworldMobile = '../static/destinations_disneyworld_mobile.jpg';
const otherdisney = '../static/destinations_other.jpg';
const otherdisneyMobile = '../static/destinations_other_mobile.jpg';
const cruise = '../static/destinations_cruise.jpg';
const cruiseMobile = '../static/destinations_cruise_mobile.jpg';

const styles = {};

styles.mobileDestination = {
    height: 'calc((100% - 96px) / 4)',
    overflow: 'hidden',
    position: 'absolute',
    top: 96,
    width: '100vw'
};

export default () => (
    <Layout>
        <Desktop>
            <Destination destination='disney-destinations' imageSrc={otherdisney} title='Disney Destinations'/>
            <Destination destination='disneyworld' imageSrc={disneyworld} title='Disney World'/>
            <Destination destination='universal' imageSrc={otherdisney} title='Universal Studios'/>
            <Destination destination='cruises' imageSrc={cruise} title='Cruises'/>
        </Desktop>
        <Mobile>
            <div style={styles.mobileDestination}>
                <div style={{color: 'white', padding: '5px',  position: 'absolute', width: '100vw', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 1}}>Disney Destinations</div>
                <img src={otherdisneyMobile}></img>
            </div>
            <div style={
                merge(styles.mobileDestination, {
                    top: 'calc(96px + ((100% - 96px) / 4))'
                })}>
                <div style={{color: 'white', padding: '5px',  position: 'absolute', width: '100vw', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 1}}>Disney World</div>
                <img style={{marginTop: '5%', transform: 'translateY(-25%)'}} src={disneyworldMobile}></img>
            </div>
            <div style={merge(styles.mobileDestination, {
                top: 'calc(96px + (2 * (100% - 96px) / 4))'
            })}>
                <div style={{color: 'white', padding: '5px',  position: 'absolute', width: '100vw', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 1}}>Universal Studios</div>
                <img style={{marginLeft: '5%', marginTop: '5%', transform: 'translateY(-30%) translateX(-10%)'}} src={cruiseMobile}></img>
            </div>
            <div style={merge(styles.mobileDestination, {
                top: 'calc(95px + (3 * (100% - 96px) / 4))'
            })}>
                <div style={{color: 'white', padding: '5px',  position: 'absolute', width: '100vw', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 1}}>Cruises</div>
                <img style={{marginLeft: '5%', marginTop: '5%', transform: 'translateY(-30%) translateX(-10%)'}} src={cruiseMobile}></img>
            </div>
        </Mobile>
    </Layout>
);
