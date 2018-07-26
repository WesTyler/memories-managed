'use strict';

import { Desktop, Tablet, Mobile } from '../components/Responsive';
import Layout from '../layouts/Main';
import styles from './styles/IndexStyle';

const castle = '../static/copywrite_castle.jpg';
const castleMobile = '../static/castle_mobile.jpg';

const Index = () => (
    <Layout>
        <Desktop>
            <div style={styles.parallax}>
                <img style={styles.parallaxBack} src={castle}/>
                <div style={styles.parallaxFront}>
                    <h1 style={styles.mission}>
                        Our intentional planning leads to your immense joy
                    </h1>
                    <div style={styles.definition}>
                        <span style={styles.definitionPhonetic}>felicity</span>
                        <span style={styles.definitionMeta}> · noun · </span>
                        <span style={styles.definitionMain}>the state of being happy. </span>
                        <span style={styles.definitionDecoration}>especially:</span>
                        <span style={styles.definitionMain}> great happiness.</span>
                    </div>
                </div>
            </div>
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
