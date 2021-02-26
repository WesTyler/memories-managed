'use strict';

import { Desktop, Tablet, Mobile } from '../components/Responsive';
import Layout from '../layouts/Main';
import styles from './styles/IndexStyle';

const hero = '../static/hero.jpg';
const hero_mobile = '../static/hero_mobile.jpg';

const Index = () => (
    <Layout>
        <Desktop>
            <div style={styles.parallax}>
                <img style={styles.parallaxBack} src={hero}/>
                <div style={styles.parallaxFront}>
                    <div>
                        <div style={{height: '140px', width: '60vw', margin: 'auto'}}>
                            <img style={{width: '100%'}} draggable='false' src='../static/typography_logo.svg'></img>
                            <div style={styles.mission}>Our intentional planning leads to your immense joy</div>
                        </div>
                    </div>
                    {/* <div style={styles.definition}>
                        <span style={styles.definitionPhonetic}>felicity</span>
                        <span style={styles.definitionMeta}> · noun · </span>
                        <span style={styles.definitionMain}>the state of being happy. </span>
                        <span style={styles.definitionDecoration}>especially:</span>
                        <span style={styles.definitionMain}> great happiness.</span>
                    </div> */}
                </div>
            </div>
        </Desktop>
        <Mobile>
            <div style={{height: '100vh', width: '100vw', overflow: 'hidden'}}>
                <img style={styles.mobileImg} src={hero_mobile}/>
            </div>
        </Mobile>
    </Layout>
);

export default Index;
