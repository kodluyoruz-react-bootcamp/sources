import { useState } from "react";

import Button from "./Button";

function UserList({ users, setUsers }) {
	const [name, setName] = useState("");

	const handleClick = () => {
		if (name) {
			setUsers((prev) => [...prev, { name, age: 28 }]);
			setName("");
		}
	};

	const handleChangeName = (event) => setName(event.target.value);

	return (
		<>
			<ul>
				{users.map((user, i) => (
					<li key={i}>
						{i + 1} - {user.name}
					</li>
				))}
			</ul>

			<input value={name} onChange={handleChangeName} />
			<Button onClick={handleClick} text="Click" style={{ color: "red" }} />
		</>
	);
}

export default UserList;
