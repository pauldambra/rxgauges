const Rx = require('rx');

module.exports = url => {
	return Rx.Observable.timer(1000, 1000)
    .timeInterval()
    .pluck('interval')
    .flatMap(_ => Rx.Observable.fromPromise(fetch(url)))
    .retry(3);
}