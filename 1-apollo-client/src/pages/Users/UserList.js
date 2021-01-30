import React from "react";
import { Link } from "react-router-dom";

function UserList({ users }) {
	return (
		<div>
			{users.map(({ id, name, surname }) => (
				<div key={id}>
					<Link to={`/users/${id}`}>
						{name} {surname}
					</Link>
				</div>
			))}
		</div>
	);
}

export default UserList;
