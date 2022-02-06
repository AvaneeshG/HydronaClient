var url = new URL(window.location.href)
var down = document.getElementById('doxx');

function query() {
    //url.searchParams.append('query', 'ddos');
    url.searchParams.append(document.getElementById('myText'));
    down.innerHTML = url;
    window.history.pushState(null, document.title, url) // switch to url kek
}