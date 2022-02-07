var url = new URL(window.location.href)
var down = document.getElementById('doxx');

function query() {
    //url.searchParams.append('query', 'ddos');
    content = document.getElementById('myText')
    url.searchParams.append('query', content);
    
    down.innerHTML = url;
    window.history.replaceState(null, document.title, url) // switch to url kek
}