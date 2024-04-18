const net = require('net');

const storage = {};

// Create a server
const server = net.createServer(socket => {
    console.log('Client connected');

    socket.on('data', data => {
        const command = data.toString().trim(); // This command will convert buffer to string and remove whitespaces

        const [action, key, value] = command.split(' ');

        switch (action.toLowerCase()) {
            case 'set':
                storage[key] = value;
                socket.write(`Key '${key}' set to '${value}'\n`);
                break;
            case 'get':
                const storedValue = storage[key];
                if (storedValue) {
                    socket.write(`Value for key '${key}': '${storedValue}'\n`);
                } else {
                    socket.write(`Key '${key}' not found\n`);
                }
                break;
            case 'del':
                if (storage[key]) {
                    delete storage[key];
                    socket.write(`Key '${key}' deleted\n`);
                } else {
                    socket.write(`Key '${key}' not found\n`);
                }
                break;
            default:
                socket.write('Invalid command\n');
        }
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

const PORT = 6379;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
