const Rx = require('rx');

const url = 'http://numbersapi.com/random/math?min=0&max=100&json'

const numbers$ = require('./urlGetterer')(url)
    .flatMap(r => Rx.Observable.fromPromise(r.json()))
    .map(n => n.number);

module.exports = {
    start: function(opts) {
        numbers$.subscribe(n => {
            const newVal = 180 * (n / 100);
            opts.gauge.setAttribute(
                'style', `
					      -webkit-transform: rotate(${newVal}deg);
					      -moz-transform: rotate(${newVal}deg);
					      transform: rotate(${newVal}deg);'
					      `
            );
            opts.value.innerHTML = n;
        }, opts.errorFn);
    }
};