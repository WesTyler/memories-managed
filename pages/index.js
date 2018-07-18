'use strict';

import Layout from '../layouts/Main';

const small = '../static/coming_soon_sml.png';
const large = '../static/coming_soon.png'

const imgStyle = {
    display    : 'block',
    marginLeft : 'auto',
    marginRight: 'auto'
};
const pStyle = {
    textAlign: 'center'
};

const Index = () => (
    <Layout>
        <p style={pStyle}>Coming Soon</p>
        <picture>
            <source media='(max-width: 550px)' srcSet={small} />
            <source media='(min-width: 551px)' srcSet={large} />
            <img style={imgStyle} src={large}/>
        </picture>
    </Layout>
);

export default Index;
