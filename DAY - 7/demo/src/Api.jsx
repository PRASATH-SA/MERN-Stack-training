function api(){
    let data;
    fetch('https://raw.githubusercontent.com/PRASATH-SA/ATM2K25/refs/heads/main/events.json').then(e=>e.json()).then(r=>data = (r[0]["events"][0]))
    return data
}
function Api(){
    return(
        <p>price: <span>{api()}</span></p>
    )
}

export default Api