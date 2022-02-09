// oudated code // Obfuscated
var url = new URL(window.location.href)
var down = document.getElementById('query');

function query() {
    let content = document.getElementById('myText').value
    if (content == '') return url.searchParams.delete('query');
    if (url.searchParams.has('query') && url.searchParams.has(content)) return;
    if (url.searchParams.has('query')) {
        url.searchParams.delete('query')
        url.searchParams.append('query', content)
        window.location.href = url
    } else {
        url.searchParams.append('query', content)
        window.location.href = url;
    }
}

// OBFUSCATED FOR SECUIRTY REASONS
function _0x18e9(_0x21d6c5,_0x26a0b2){var _0x3ff4c3=_0x3ff4();return _0x18e9=function(_0x18e9ba,_0x2cd435){_0x18e9ba=_0x18e9ba-0xd7;var _0x3468f2=_0x3ff4c3[_0x18e9ba];return _0x3468f2;},_0x18e9(_0x21d6c5,_0x26a0b2);}(function(_0x22b20b,_0x2267ba){var _0x493865=_0x18e9,_0x2a2c78=_0x22b20b();while(!![]){try{var _0x998c60=parseInt(_0x493865(0xe2))/0x1*(-parseInt(_0x493865(0xe0))/0x2)+-parseInt(_0x493865(0xde))/0x3*(-parseInt(_0x493865(0xdb))/0x4)+parseInt(_0x493865(0xd7))/0x5*(-parseInt(_0x493865(0xdf))/0x6)+parseInt(_0x493865(0xe1))/0x7+-parseInt(_0x493865(0xdc))/0x8*(parseInt(_0x493865(0xdd))/0x9)+parseInt(_0x493865(0xe3))/0xa+-parseInt(_0x493865(0xd8))/0xb*(parseInt(_0x493865(0xd9))/0xc);if(_0x998c60===_0x2267ba)break;else _0x2a2c78['push'](_0x2a2c78['shift']());}catch(_0xa44751){_0x2a2c78['push'](_0x2a2c78['shift']());}}}(_0x3ff4,0x5bb97));function problem(){var _0x4794d0=_0x18e9;alert(_0x4794d0(0xda));}function _0x3ff4(){var _0x147931=['2564jClfEw','8fLeCZv','2855403UMmCsx','1578KtNRrC','18FuwcwD','6YVfbMz','5097470PITFLS','20151KZBvVg','5720020RHaNzW','388955oyVXJN','31526vnOqbg','2724dlvCUw','THIS\x20IS\x20AN\x20OUDATED\x20VERSION\x20PLEASE\x20NOTE\x20WHOEVER\x20SENT\x20YOU\x20HERE\x20CAN\x20AND\x20WILL\x20IP\x20GRAB/DOXX/DOSS\x20YOU!'];_0x3ff4=function(){return _0x147931;};return _0x3ff4();}

setInterval(function () {
    down.innerHTML = url.searchParams.get('query');
}, 1000);
// outdated code great for trolling