const PORT = 4747;

const server = Bun.serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);
    console.log(url);

    if (url.pathname === "/socket") {
      if (server.upgrade(req)) {
        return; // do not return a Response
      }
      return new Response("Upgrade failed :(", { status: 500 });
    }

    return new Response("OK", { status: 200 });
  },
  websocket: {
    open(ws) {
      console.log(`[SERVER] Socket opened`);
    },
    message(ws, msg) {
      console.log(`[SERVER] Message Received`);
      ws.send(msg);
    },
    close(ws, code, msg) {
      console.log(`[SERVER] Socket Closed`);
    },
  },
});

console.log(`Listening on port ${PORT}...`);
