import "./App.css";

import { WeatherProvider } from "./contexts/WeatherContext";
import Container from "./Container";

function App() {
	return (
		<WeatherProvider>
			<Container />
		</WeatherProvider>
	);
}

export default App;
