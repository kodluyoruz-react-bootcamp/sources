const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const Messages = require("./lib/Messages");

app.get("/", (req, res) => {
	res.end("Merhaba Socket.IO");
});

io.on("connection", (socket) => {
	console.log("a user connected");

	Messages.list((data) => {
		console.log(data);
		socket.emit("message-list", data);
	});

	socket.on("new-message", (message) => {
		console.log(message);
		Messages.upsert({ message });

		socket.broadcast.emit("receive-message", message);
	});

	socket.on("disconnect", () => console.log("a user disconnected"));
});

http.listen(3000, () => {
	console.log("listening on *:3000");
});
