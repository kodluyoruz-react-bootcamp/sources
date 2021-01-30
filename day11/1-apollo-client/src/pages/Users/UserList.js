import React from "react";
import { Link } from "react-router-dom";

function UserList({ users }) {
	console.log(users);
	return (
		<div>
			{users.map(({ id, name, surname, posts_aggregate: { aggregate } }) => (
				<div key={id}>
					<Link to={`/users/${id}`}>
						{name} {surname}
					</Link>
					{aggregate.count > 0 && (
						<span style={{ fontSize: "12px" }}>({aggregate.count})</span>
					)}
				</div>
			))}
		</div>
	);
}

export default UserList;
