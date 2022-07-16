window.addEventListener('load', function () {
    var socket = io();

    socket.on('server-action', function (msg) {
        console.log(msg.value);
        const audio = new Audio(`${window.location.href}${msg.value}`)

        audio.play();
    })
})

