const errorBox = document.getElementsByClassName('error-box')[0];
const showError = e => {
    console.error(e);
    errorBox.setAttribute('style', 'display:block');
};

require('./randomMath').start({
    gauge: document.getElementsByClassName('gauge--random-number')[0]
        .getElementsByClassName('semi-circle--mask')[0],
    value: document.getElementsByClassName('gauge--random-number')[0]
        .getElementsByClassName('value')[0],
    errorFn: showError
});

require('./randomCat').start({
    img: document.getElementsByClassName('random-cat')[0]
        .getElementsByTagName('img')[0],
    errorFn: showError
});