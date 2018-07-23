'use strict';

import { Desktop, Tablet, Mobile } from '../components/Responsive';
import Layout from '../layouts/Main';

const castle = '../static/castle.jpg'
const castleMobile = '../static/castle_mobile.jpg'

const styles = {};

styles.img = {
    display    : 'block',
    width: '100%'
};
styles.mobileImg = Object.assign({ width: '100%'}, styles.img);
styles.p = {
    textAlign: 'center'
};

const Index = () => (
    <Layout>
        <Desktop>
            <img style={styles.img} src={castle}/>
        </Desktop>
        <Tablet>
            <img style={styles.mobileImg} src={castle}/>
        </Tablet>
        <Mobile>
            <img style={styles.mobileImg} src={castleMobile}/>
        </Mobile>
    </Layout>
);

export default Index;
