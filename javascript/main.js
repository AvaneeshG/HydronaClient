var url = new URL(window.location.href)
var down = document.getElementById('doxx');

function query() {
    url.searchParams.append('query', 'ddos');
    down.innerHTML = url;
}