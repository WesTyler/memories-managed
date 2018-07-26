'use strict';

import { Desktop, Tablet, Mobile } from '../components/Responsive';
import Layout from '../layouts/Main';

const styles = {};

// styles.img = {
//     display    : 'block',
//     width: '100%'
// };
// styles.mobileImg = Object.assign({ width: '100%'}, styles.img);
// styles.p = {
//     textAlign: 'center'
// };

const Destinations = () => (
    <Layout>
        <Desktop>
            Desktop Destinations
        </Desktop>
        <Tablet>
            Tablet Destinations
        </Tablet>
        <Mobile>
            Mobile Destinations
        </Mobile>
    </Layout>
);

export default Destinations;
