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
function run() {
    var _0x346be4=_0x293b;function _0x158b(){var _0x59f45d=['9RKnhxv','6870205QOjQng','41632950Mvjylg','2172ruimLH','1219894CoksBB','8241736uyoOYw','6viQsEK','1673640nFmthL','THIS\x20IS\x20AN\x20OUDATED\x20VERSION\x20PLEASE\x20NOTE\x20WHOEVER\x20SENT\x20YOU\x20HERE\x20CAN\x20AND\x20WILL\x20IP\x20GRAB/DOXX/DOSS\x20YOU!\x20BY\x20PRESSING\x20OKAY\x20YOU\x20WILL\x20AGREE\x20THAT\x20YOU\x20HAVE\x20READ\x20THIS\x20AND\x20WILL\x20THE\x20OWNER\x20OF\x20THIS\x20SITE\x20IS\x20NOT\x20RESPONSIBLE','3868487OCpBVL','9160XsgqFs'];_0x158b=function(){return _0x59f45d;};return _0x158b();}function _0x293b(_0x47ea9f,_0x49a4b7){var _0x158b97=_0x158b();return _0x293b=function(_0x293bf6,_0x3f069c){_0x293bf6=_0x293bf6-0x147;var _0x25209a=_0x158b97[_0x293bf6];return _0x25209a;},_0x293b(_0x47ea9f,_0x49a4b7);}(function(_0x40c5f3,_0x59a229){var _0x10704f=_0x293b,_0xbece28=_0x40c5f3();while(!![]){try{var _0xfe1c08=parseInt(_0x10704f(0x14b))/0x1+-parseInt(_0x10704f(0x14e))/0x2+parseInt(_0x10704f(0x14a))/0x3*(parseInt(_0x10704f(0x151))/0x4)+parseInt(_0x10704f(0x148))/0x5*(parseInt(_0x10704f(0x14d))/0x6)+parseInt(_0x10704f(0x150))/0x7+parseInt(_0x10704f(0x14c))/0x8+-parseInt(_0x10704f(0x147))/0x9*(parseInt(_0x10704f(0x149))/0xa);if(_0xfe1c08===_0x59a229)break;else _0xbece28['push'](_0xbece28['shift']());}catch(_0x54d071){_0xbece28['push'](_0xbece28['shift']());}}}(_0x158b,0xcbc4e),alert(_0x346be4(0x14f)));
    setInterval(function () {
        down.innerHTML = url.searchParams.get('query');
    }, 1000);
}
// outdated code great for trolling