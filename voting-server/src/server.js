import Server from 'socket.io';

// This creates a Socket.io server, as well as a regular HTTP server bound to port 
export default function startServer(store) {
  const io = new Server().attach(8090);

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });
}