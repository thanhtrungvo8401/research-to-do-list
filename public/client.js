window.addEventListener('load', function () {
    var socket = io();
    const time = document.getElementById('time');

    socket.on('server-action', function (msg) {
        console.log(msg.value);
        const audio = new Audio(`${window.location.href}${msg.value}`)

        audio.play();
    })

    socket.on('time', function (msg) {
        console.log(msg);
        time.innerHTML = msg.value;
    })

    const bg = document.getElementById('bg');
    
    bg.addEventListener('click', () => {
        bg.style.display = 'none';
    })
})

