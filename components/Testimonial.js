'use strict';

const braly = '../static/braly_testimonial.jpg';

const testimonial = {
    display: 'flex',
    alignItems: 'center',
    margin: '0px 25px'
};

const testimonialImage = {
    border: '0px',
    borderRadius: '50%'
};
const testimonialText = {
    fontFamily: 'BigJohn',
    letterSpacing: '0.075em',
    lineHeight: '1.3em',
    marginLeft: 30,
    width: '65%'
};

export default () => (
    <div style={testimonial}>
        <img style={testimonialImage} src={braly} alt='Braly kids with Stitch'/>
        <span style={testimonialText}>
            “Asking Caitlyn to help us plan our trip to Disney World was the best decision I could have made. I never questioned her passion and desire to make the experience a magical one for our family. And that it was!” - Braly Family
        </span>
    </div>
);