import { useState, useContext } from "react";

import styles from "./style.module.css";

import ChatContext from "../contexts/ChatContext";
import { sendMessage } from "../socketService";

function ChatForm() {
	const [message, setMessage] = useState("");

	const { messages, setMessages } = useContext(ChatContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		sendMessage(message);
		setMessages([...messages, { message, fromMe: true }]);
		setMessage("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="bir mesaj yazın..."
					className={styles.textInput}
				/>
			</form>
		</div>
	);
}

export default ChatForm;
