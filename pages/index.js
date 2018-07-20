'use strict';

import { Desktop, Tablet, Mobile } from '../components/Responsive';
import Layout from '../layouts/Main';

const small = '../static/coming_soon_sml.png';
const large = '../static/coming_soon.png'

const styles = {};

styles.img = {
    display    : 'block',
    marginLeft : 'auto',
    marginRight: 'auto'
};
styles.mobileImg = Object.assign({ width: '100%'}, styles.img);
styles.p = {
    textAlign: 'center'
};

const Index = () => (
    <Layout>
        <p style={styles.p}>Coming Soon</p>
        <Desktop>
            <img style={styles.img} src={large}/>
        </Desktop>
        <Tablet>
            <img style={styles.mobileImg} src={large}/>
        </Tablet>
        <Mobile>
            <img style={styles.mobileImg} src={small}/>
        </Mobile>
    </Layout>
);

export default Index;
