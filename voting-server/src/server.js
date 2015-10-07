import Server from 'socket.io';

// This creates a Socket.io server, as well as a regular HTTP server bound to port 
export default function startServer() {
  const io = new Server().attach(8090);
}