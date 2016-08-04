const Rx = require('rx');

const url = 'http://thecatapi.com/api/images/get?size=small'

const cats$ = require('./urlGetterer')(url).map(n => n.url);

module.exports = {
    start: function(opts) {
        cats$.subscribe(
            c => opts.img.setAttribute('style', `background-image:url(${c})`),
            opts.errorFn);
    }
};