import "./App.css";

import { ChatProvider } from "./contexts/ChatContext";
import Container from "./Container";

function App() {
	return (
		<ChatProvider>
			<div className="App">
				<Container />
			</div>
		</ChatProvider>
	);
}

export default App;
