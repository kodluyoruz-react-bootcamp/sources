import React from "react";

import { useQuery } from "@apollo/client";
import { GET_USERS } from "./queries";

import UserList from "./UserList";

function Users() {
	const { loading, error, data, refetch } = useQuery(GET_USERS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<div>
			<UserList users={data.users} />
			<button onClick={() => refetch()}>Refetch!</button>
		</div>
	);
}

export default Users;
