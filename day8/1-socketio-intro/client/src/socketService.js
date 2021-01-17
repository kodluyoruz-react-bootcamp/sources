import io from "socket.io-client";

let socket;

export const initSocket = () => {
	socket = io("http://localhost:3000", {
		transports: ["websocket"],
	});

	console.log("Connecting...");
	socket.on("connect", () => console.log("Connected!"));
};

export const disconnectSocket = () => {
	console.log("Disconnecting...");
	if (socket) socket.disconnect();
};

export const sendMessage = (message) => {
	if (socket) socket.emit("new-message", message);
};
