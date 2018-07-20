'use strict';

import { Desktop, Tablet, Mobile } from '../components/Responsive';
import Layout from '../layouts/Main';

const small = '../static/coming_soon_sml.png';
const large = '../static/coming_soon.png'

const imgStyle = {
    display    : 'block',
    marginLeft : 'auto',
    marginRight: 'auto'
};
const mobileImgStyle = Object.assign({ width: '100%'}, imgStyle);
const pStyle = {
    textAlign: 'center'
};

const Index = () => (
    <Layout>
        <p style={pStyle}>Coming Soon</p>
        <Desktop>
            <img style={imgStyle} src={large}/>
        </Desktop>
        <Tablet>
            <img style={mobileImgStyle} src={large}/>
        </Tablet>
        <Mobile>
            <img style={mobileImgStyle} src={small}/>
        </Mobile>
    </Layout>
);

export default Index;
