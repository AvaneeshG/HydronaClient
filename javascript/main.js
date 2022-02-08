var url = new URL(window.location.href)
var down = document.getElementById('query');

function query() {
    let str = document.getElementById('myText').value
    content = str.replace(/</g, "&lt") || str.replace(/>/g, "&gt");
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

setInterval(function () {
    down.innerHTML = url.searchParams.get('query');
}, 1000);