'use strict';

import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={769} />;
const MobileDefault = props => <Responsive {...props} maxWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={400} />;
const Tablet = props => <Responsive {...props} minWidth={401} maxWidth={768} />;

export {
    Desktop,
    Mobile,
    MobileDefault,
    Tablet
};