import { useContext } from "react";

import styles from "./style.module.css";

import ChatContext from "../contexts/ChatContext";

function ChatList() {
	const { messages } = useContext(ChatContext);

	return (
		<div className={styles.chatlist}>
			{messages.map((item, key) => (
				<div key={key}>{item.message}</div>
			))}
		</div>
	);
}

export default ChatList;
