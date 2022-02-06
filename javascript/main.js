data = { 
    params : {
        'ishacked': 'true'
    }
}

function encodeQuery(){
    let query = window.location.href
    for (let d in data.params)
        query += encodeURIComponent(d) + '='
                + encodeURIComponent(data.params[d]) + '&';
    return query.slice(0, -1)
}