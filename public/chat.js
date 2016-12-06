var ws = new WebSocket("ws://10.103.50.94:8000");

function sendMassege() {
    var username = document.getElementById("username").value;
    var text = document.getElementById("text").value;
    ws.send( text + " : " + username);
}

ws.onmessage = function (message) {

    var textPlace = document.createElement("p");
    textPlace.innerHTML = message.data;

    document.getElementById("massage").appendChild(textPlace);
};
