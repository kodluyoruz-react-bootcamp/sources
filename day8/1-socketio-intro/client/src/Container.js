import { useEffect } from "react";

import ChatList from "./components/ChatList";
import ChatForm from "./components/ChatForm";

import { initSocket, disconnectSocket } from "./socketService";

function Container() {
	useEffect(() => {
		initSocket();

		return () => disconnectSocket();
	}, []);

	return (
		<>
			<ChatList />
			<ChatForm />
		</>
	);
}

export default Container;
