import "./App.css";

import { ThemeProvider } from "./contexts/ThemeContext";

import Button from "./components/Button";
import Title from "./components/Title";

function App() {
	return (
		<ThemeProvider>
			<div className="App">
				<Button />
				<hr />
				<Title />
			</div>
		</ThemeProvider>
	);
}

export default App;
