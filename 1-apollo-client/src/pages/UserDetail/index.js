import React from "react";

import TimeAgo from "react-timeago";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USER_DETAIL } from "./queries";

function UserDetail() {
	const { id } = useParams();

	const { loading, error, data } = useQuery(GET_USER_DETAIL, {
		// fetchPolicy: "cache-only",
		variables: {
			id,
		},
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	console.log(data);

	const { name, age, surname, created_at } = data.users_by_pk;

	return (
		<div>
			<h2>
				{name} {surname} ({age})
			</h2>
			<TimeAgo date={created_at} />
		</div>
	);
}

export default UserDetail;
