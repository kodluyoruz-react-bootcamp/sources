import React from "react";

import TimeAgo from "react-timeago";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_POST_DETAIL } from "./queries";

function PostDetail() {
	const { id } = useParams();

	const { loading, error, data } = useQuery(GET_POST_DETAIL, {
		// fetchPolicy: "cache-only",
		variables: {
			id,
		},
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	console.log(data);

	const { posts_by_pk: post } = data;

	return (
		<div>
			<h1 className="postTitle">{post.title}</h1>
			<div className="postDate">
				<TimeAgo date={post.created_at} />
			</div>
			{post.media_url && (
				<img src={post.media_url} alt="post media" className="postMedia" />
			)}
			<p className="description">{post.description}</p>
		</div>
	);
}

export default PostDetail;
