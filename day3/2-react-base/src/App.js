import { useState } from "react";

import UserList from "./components/UserList";

function App() {
	const [name, setName] = useState("");
	const [isVisible, setIsVisible] = useState(true);
	const [users, setUsers] = useState([
		{ name: "Metin", age: 22 },
		{ name: "Hande", age: 24 },
	]);

	const handleClick = () => {
		if (name) {
			setUsers((prev) => [...prev, { name, age: 28 }]);
			setName("");
		}
	};

	const handleToggle = () => setIsVisible(!isVisible);

	const handleChangeName = (event) => setName(event.target.value);

	return (
		<div>
			<button onClick={handleToggle}>Toggle {isVisible ? "off" : "on"}</button>

			{isVisible && (
				<>
					<UserList users={users} />
					<hr />

					<input value={name} onChange={handleChangeName} />
					<button onClick={handleClick}>Add user</button>
				</>
			)}
		</div>
	);
}

export default App;
