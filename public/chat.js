var ws = new WebSocket("ws://10.103.50.94:8000");

function sendMassege() {
    var username = encodeHTML(document.getElementById("username").value);
    var text = encodeHTML(document.getElementById("text").value);
    ws.send(username + " : " + text);
}

ws.onmessage = function (message) {
    var textPlace = document.createElement("p");
    textPlace.innerHTML = message.data;
    document.getElementById("allMassage").appendChild(textPlace);
};

function encodeHTML(text) {
    return text.replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
}