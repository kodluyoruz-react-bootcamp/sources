import React from "react";

function UserList({ users, data }) {
	return (
		<ul>
			{users.map((user, i) => (
				<li key={i}>{user}</li>
			))}
		</ul>
	);
}

export default UserList;
