'use strict';

import React from 'react';

import { Desktop, Tablet, Mobile } from '../components/Responsive';
import Destination from '../components/Destination';
import Layout from '../layouts/Main';

const disneyworld = '../static/destinations_disneyworld.jpg';
const otherdisney = '../static/destinations_other.jpg';
const cruise = '../static/destinations_cruise.jpg';

export default () => (
    <Layout>
        <Desktop>
            <Destination destination='disney-destinations' imageSrc={otherdisney} title='Disney Destinations'/>
            <Destination destination='disneyworld' imageSrc={disneyworld} title='Disney World'/>
            <Destination destination='universal' imageSrc={otherdisney} title='Universal Studios'/>
            <Destination destination='cruises' imageSrc={cruise} title='Cruises'/>
        </Desktop>
        <Tablet>
            Tablet Destinations
        </Tablet>
        <Mobile>
            Mobile Destinations
        </Mobile>
    </Layout>
);
