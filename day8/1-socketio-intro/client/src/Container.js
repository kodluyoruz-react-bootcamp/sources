import { useEffect, useContext } from "react";

import ChatList from "./components/ChatList";
import ChatForm from "./components/ChatForm";

import ChatContext from "./contexts/ChatContext";

import { initSocket, disconnectSocket, subscribeToChat } from "./socketService";

function Container() {
	const { setMessages } = useContext(ChatContext);

	useEffect(() => {
		initSocket();

		subscribeToChat((message) => {
			setMessages((oldChats) => [...oldChats, { message }]);
		});

		return () => disconnectSocket();
	}, [setMessages]);

	return (
		<>
			<ChatList />
			<ChatForm />
		</>
	);
}

export default Container;
