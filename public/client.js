window.addEventListener('load', function () {
    var socket = io();

    socket.on('server-action', function (msg) {
        console.log(msg.value);
        const audio = new Audio(`${window.location.href}${msg.value}`)

        audio.play();
    })

    const bg = document.getElementById('bg');
    
    bg.addEventListener('click', () => {
        bg.style.display = 'none';
    })
})

