'use strict';

const merge = (source, overrideSource) => {
    return Object.assign({}, source, overrideSource);
};

export {
    merge
};
