class RemoteEndpoint {
    constructor(baseUrl) {
        this.BaseURL = baseUrl
    }

    buildUrl(endpointPath) {
        let url = "";
        url = this.BaseURL;
        if (endpointPath[0] !== "/") {
            url = url + "/";
        }
        url = url + endpointPath;

        return url;
    }

    objectToURLParams(object) {
        let paramString = ""
        for (const key in object) {
            let field = key + "=" + object[key];    
            paramString = paramString + field + "&";
        }
        return paramString;
    }

    SendPOST(EndpointPath, Data) {
        let url = this.buildUrl(EndpointPath);
        
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Data)
        })
    }

    SendGET(EndpointPath, Data) {
        let url = this.buildUrl(EndpointPath);
        let params = this.objectToURLParams(Data);
        console.log(params);
        if (params !== "") {
            url = url + "?" + params;
        }

        return fetch(url);
    }
}

export { RemoteEndpoint }