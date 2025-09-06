function SendPost(baseUrl, ep, data) {
    url = baseUrl + ep
    jsonData = JSON.stringify(data)
    fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    }).then(()=>{
        console.log("Success!!");
    });
}

function SendGet(baseUrl, ep, data="") {
    url = baseUrl + ep;
    if (data !== "") {
        url = url + "?" + data
    }

    console.log(url);
    fetch(url)
    .then((response)=>{
        return response.text();
    })
    .then((data)=>{
        console.log(data);
    });
}

export { SendGet, SendPost}