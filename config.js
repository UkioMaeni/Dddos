module.exports = {
    target: {
        targetUrl: "https://bubuta.ru:110",
        requestDelay: 0,
        repeat: 21222,
        abortNumber: 5,
        defaultSettings: true
    },
    httpMethod: "GET",
    // custom header ( optionnal)
    // header: {
    //  library:"ddos-guard",
    //   requestHeader:{"User-Agent":"your user agent goes here"}
    //},
    supportsHttp: false,
    rotatingIp: false
}
