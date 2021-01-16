import { useState, useMemo, useCallback } from "react";
import "./App.css";

import List from "./components/List";
import Increment from "./components/Increment";

function App() {
	const [count, setCount] = useState(0);

	const users = useMemo(() => {
		return ["Mehmet", "Burak", "Ayşe", "Fatma"];
	}, []);

	const increment = useCallback(() => {
		setCount((c) => c + 1);
	}, [setCount]);

	return (
		<div className="App">
			<h1>{count}</h1>
			<Increment artir={increment} />

			<hr />
			<List users={users} />
		</div>
	);
}

export default App;
