import { memo } from "react";

function List({ users }) {
	console.log("List re-render");

	return (
		<div>
			{users.map((user, index) => (
				<div key={index}>{user}</div>
			))}
		</div>
	);
}

export default memo(List);
