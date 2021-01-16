import "./App.css";

import Header from "./components/Header";
import List from "./components/List";

import { WeatherProvider } from "./contexts/WeatherContext";

function App() {
	return (
		<WeatherProvider>
			<div className="App">
				<Header />
				<List />
			</div>
		</WeatherProvider>
	);
}

export default App;
