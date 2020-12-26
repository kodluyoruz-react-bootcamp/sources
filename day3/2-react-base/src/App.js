import { useState } from "react";

function App() {
	const [isVisible, setIsVisible] = useState(false);
	const [users, setUsers] = useState([
		{ name: "Metin", age: 22 },
		{ name: "Hande", age: 24 },
	]);

	const handleClick = () => {
		setUsers((prev) => [...prev, { name: "Seda", age: 28 }]);
	};

	const handleToggle = () => setIsVisible(!isVisible);

	return (
		<div>
			<button onClick={handleToggle}>Toggle {isVisible ? "off" : "on"}</button>

			{isVisible && (
				<>
					{users.map((user, i) => (
						<li key={i}>{user.name}</li>
					))}
					<hr />
					<button onClick={handleClick}>Add user</button>
				</>
			)}
		</div>
	);
}

export default App;
