var url = new URL(window.location.href)
var down = document.getElementById('doxx');

function query() {
    url.searchParams.append('query', 'ddos');
    window.history.replaceState(null, document.title, url) // switch to url kek
}