'use strict';

import Layout from '../layouts/Main';
import { Desktop, Tablet, Mobile } from '../components/Responsive';
import parallax from './styles/ParallaxStyles';
import styles from './styles/AboutStyles';
import { merge } from '../utils';

const about = '../static/about.jpg'

export default () => (
    <Layout>
        <Desktop>
        <div style={parallax.container}>
                <img style={merge(parallax.parallaxBack, {
                    transform: 'translateZ(-11px) scale(12)',
                    width: '100vw'
                })} src={about}/>
                <div style={parallax.parallaxFront}>
                    <div style={styles.logo}>
                        About Felicity
                    </div>
                    <div style={styles.container}>
                        <div style={styles.title}>Our Mission</div>
                        <p style={styles.content}>
                            To intentionally plan stress-free & magical trips, and help you make memories to last a life time!
                        </p>
                        <p style={merge(styles.content, {
                            margin: '0'
                        })}>
                            Felicity means “intense happiness”, and it is our goal that from beginning to end
                        </p>
                        <p style={merge(styles.content, {
                            margin: '0 0 10px'
                        })}>
                            your experience should be a <p style={{display: 'inline', fontFamily: 'Superclarendon', fontSize: '1.5vw'}}>JOYFUL</p> one!
                        </p>
                    </div>
                    <div style={merge(styles.container, {
                        height: '30vh',
                        marginTop: '10vh',
                        minHeight: '190px'
                    })}>
                        <div style={styles.title}>Our Services</div>
                        <p style={styles.content}>
                            We will quote and book your trip for <p style={{display: 'inline', fontFamily: 'Superclarendon', fontSize: '1.5vw'}}>FREE</p> to set you up for success!
                        </p>
                        <p style={merge(styles.content, {
                            margin: '0'
                        })}>
                            We specialize in creating fully-customized intentional itineraries with our Joy Package that:
                        </p>
                        <p style={merge(styles.content, {
                            margin: '0'
                        })}>
                            put time back into your day, take your stress away, and allow you to make the most of your trip.
                        </p>
                        <p style={merge(styles.content, {
                            margin: '0 0 10px'
                        })}>
                            These itineraries are tailored to each family or group- no two are the exact same!
                        </p>
                    </div>
                    <div style={merge(styles.container, {
                        height: '51vh',
                        marginTop: '10vh',
                        minHeight: '350px'
                    })}>
                        <div style={styles.title}>Joy Package</div>
                        <div style={merge(styles.content, styles.list, {
                            display: 'inline-block',
                            textAlign: 'left',
                            marginTop: '40px 50px 0 0'
                        })}>
                            <li>Fully Customized Itinerary</li>
                            <li>Dining Reservations</li>
                            <li>Fastpass+</li>
                        </div>
                        <div style={merge(styles.content, styles.list, {
                            display: 'inline-block',
                            textAlign: 'left',
                            margin: '40px 0 0 50px',
                        })}>
                            <li>All of Our Tips and Tricks</li>
                            <li>"My Disney Experience" help</li>
                            <li>Scooter/Stroller Rentals</li>
                        </div>
                        <p style={merge(styles.content, {
                            fontFamily: 'Superclarendon',
                            fontSize: '1.5vw',
                            margin: '20px 0'
                        })}>
                            Our intentional planning leads to your immense joy!
                        </p>
                        <p style={merge(styles.content, {
                            fontSize: '1.5vw'
                        })}>
                            Prices start at $400 and vary depending on party size & length of stay.
                        </p>
                        <p style={merge(styles.content, {
                            fontSize: '1.5vw',
                            margin: '0 0 10px'
                        })}>
                            We offer discounts to school groups and active duty military members!
                        </p>
                        <p style={merge(styles.content, {
                            fontFamily: 'Superclarendon',
                            fontSize: '1.5vw',
                            margin: '0 0 10px'
                        })}>
                            [Book Now!]
                        </p>
                    </div>
                    <div style={merge(styles.container, {
                        height: '130vh',
                        marginTop: '10vh',
                        minHeight: '450px'
                    })}>
                        <div style={styles.title}>The Dreamer Behind Felicity</div>
                        <p style={styles.content}>
                            Hi! My name is <p style={{display: 'inline', fontFamily: 'Madina', fontSize: '1.5vw'}}>Caitlyn Tyler</p>
                        </p>
                        <p style={merge(styles.content, {
                            margin: '0'
                        })}>
                            This sweet company has been a dream of mine for a long time.
                        </p>
                        <p style={merge(styles.content, {
                            margin: '0'
                        })}>
                            I have been in the Travel Industry for 4 years and have learned a lot along the way.
                        </p>
                        <p style={merge(styles.content, {
                            margin: '0 auto',
                            width: '75%'
                        })}>
                            What I have found is that, I love working with families. All kinds of families!
                            Big or small, big reunions, school trips, honeymooners! etc- it is the people that bring magic to my job.
                        </p>
                        <p style={merge(styles.content, {
                            margin: '25px auto 0px',
                            width: '75%'
                        })}>
                            I started out as a musician dreaming of the stage- spent time as a teacher, teaching sweet kiddos to
                            sing- worked an 8-5 at a j-o-b in administration- and finally found my true calling- making unforgettable trips for unforgettable people.
                        </p>
                        <p style={merge(styles.content, {
                            margin: '25px auto 0px',
                            width: '75%'
                        })}>
                            I am also a Mama to the sweetest little girl in life- she is our miracle baby and my biggest dream come true.
                            I am married to my high school sweetheart and I could not even begin to do this without his support and belief in me (You’ll also see his amazing web skills all over this website!). I still love singing and leading worship and I am big into all things crafting when there is time.
                            I constantly have to pinch myself that this is my reality! God is so cool and in the business of miracles- the very fact that I am here today,  with a baby and working for Disney is proof that He is a miracle working God!
                        </p>
                        <p style={merge(styles.content, {
                            margin: '25px auto 0px',
                            width: '75%'
                        })}>
                            Thank you so much for visiting my site!
                        </p>
                        <p style={merge(styles.content, {
                            margin: '0 auto',
                            width: '75%'
                        })}>
                            I hope it has brought some joy to your day & I hope I get to work with you in the future!
                        </p>
                        <p style={merge(styles.content, {
                            fontFamily: 'Madina',
                            fontSize: '2vw',
                            margin: '0 auto 10px auto',
                            width: '75%'
                        })}>
                            Love & Joy - Caitlyn
                        </p>
                    </div>
                </div>
            </div>
        </Desktop>
        <Mobile>
            <div>About Felicity</div>
        </Mobile>
    </Layout>
);