import React from "react";

function UserList({ users }) {
	return (
		<ul>
			{users.map((user, i) => (
				<li key={i}>
					{i + 1} - {user.name}
				</li>
			))}
		</ul>
	);
}

export default UserList;
