import { useState, useMemo } from "react";
import "./App.css";

import List from "./components/List";

function App() {
	const [count, setCount] = useState(0);

	const users = useMemo(() => {
		return ["Mehmet", "Burak", "Ayşe", "Fatma"];
	}, []);

	return (
		<div className="App">
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>Increment</button>

			<hr />
			<List users={users} />
		</div>
	);
}

export default App;
