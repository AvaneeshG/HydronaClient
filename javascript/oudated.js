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

(function(_0x352659,_0x35469c){var _0xd35093=_0x37bf,_0x4ece11=_0x352659();while(!![]){try{var _0x503a34=parseInt(_0xd35093(0xe9))/0x1*(parseInt(_0xd35093(0xe8))/0x2)+-parseInt(_0xd35093(0xee))/0x3*(-parseInt(_0xd35093(0xf0))/0x4)+parseInt(_0xd35093(0xef))/0x5*(parseInt(_0xd35093(0xe6))/0x6)+parseInt(_0xd35093(0xea))/0x7+-parseInt(_0xd35093(0xed))/0x8*(parseInt(_0xd35093(0xf1))/0x9)+parseInt(_0xd35093(0xeb))/0xa+-parseInt(_0xd35093(0xe7))/0xb;if(_0x503a34===_0x35469c)break;else _0x4ece11['push'](_0x4ece11['shift']());}catch(_0x2c7c83){_0x4ece11['push'](_0x4ece11['shift']());}}}(_0x2381,0x5b113));function _0x37bf(_0x20eac4,_0x47cf5f){var _0x2381e5=_0x2381();return _0x37bf=function(_0x37bfac,_0x22f362){_0x37bfac=_0x37bfac-0xe6;var _0x2f48ef=_0x2381e5[_0x37bfac];return _0x2f48ef;},_0x37bf(_0x20eac4,_0x47cf5f);}function _0x2381(){var _0x5bc74=['5037312bCbreo','4189310GFYCCv','THIS\x20IS\x20AN\x20OUDATED\x20VERSION\x20PLEASE\x20NOTE\x20WHOEVER\x20SENT\x20YOU\x20HERE\x20CAN\x20AND\x20WILL\x20IP\x20GRAB/DOXX/DOSS\x20YOU!\x20BY\x20PRESSING\x20OKAY\x20YOU\x20WILL\x20AGREE\x20THAT\x20YOU\x20HAVE\x20READ\x20THIS\x20AND\x20WILL\x20THE\x20OWNER\x20OF\x20THIS\x20SITE\x20IS\x20NOT\x20RESPONSIBLE','5464cMkiXb','171bnliLn','568930NyLXAS','42380MpVBdF','72NKYdJm','36ObVPff','23457786LTzDMJ','38HXjHrI','4517ZZvITp'];_0x2381=function(){return _0x5bc74;};return _0x2381();}function problem(){var _0x5d8e66=_0x37bf;alert(_0x5d8e66(0xec));}
setInterval(function () {
    down.innerHTML = url.searchParams.get('query');
}, 1000);
// outdated code great for trolling