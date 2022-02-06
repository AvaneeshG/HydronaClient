function ready() {
    //injecty vejecty fixed no longer leaked?1!
    let query = new URL(window.location).searchParams.get('query');
    document.getElementById('myText').value = query;
}