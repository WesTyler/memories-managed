'use strict';

const merge = (source, overrideSource, ...additionalSources) => {
    return Object.assign({}, source, overrideSource, ...additionalSources);
};

export {
    merge
};
