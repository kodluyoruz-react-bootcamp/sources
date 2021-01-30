import React from "react";

import TimeAgo from "react-timeago";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USER_DETAIL } from "./queries";

import Posts from "../../components/Posts";

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

	const { name, age, surname, created_at, posts } = data.users_by_pk;

	return (
		<div>
			<h2 className="username">
				{name} {surname} ({age})
			</h2>
			<TimeAgo date={created_at} />

			<Posts posts={posts} />
		</div>
	);
}

export default UserDetail;
