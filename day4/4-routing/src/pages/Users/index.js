import { useState, useEffect } from "react";

import axios from "axios";

function Users() {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios(`${process.env.REACT_APP_API_ENDPOINT}/users`)
			.then((res) => setUsers(res.data))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div>
			<h2>Users</h2>
			{loading && <div>Loading...</div>}
			{users.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
		</div>
	);
}

export default Users;
