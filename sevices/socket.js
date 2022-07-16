const { Server } = require("socket.io");


module.exports = function (server) {
    const io = new Server(server);

    io.on('connection', (socket) => {
        console.log('A user connected');

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });

    return io;
}