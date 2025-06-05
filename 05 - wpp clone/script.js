function sendMsg() {
    let msgInput = document.getElementById("msgInput");
    if (msgInput.value != "") {
        document.getElementById("msgs").innerHTML += `
        <div class="msg">${msgInput.value}</div>
        `;
    }
    msgInput.value = "";
}