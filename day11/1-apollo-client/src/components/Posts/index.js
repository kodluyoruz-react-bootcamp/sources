import React from "react";

import { Link } from "react-router-dom";

import TimeAgo from "react-timeago";

function PostList({ posts }) {
	return (
		<div>
			<h2>Posts</h2>

			<ul className="postlist">
				{posts.map(({ id, title, created_at }) => (
					<li key={id}>
						<Link to={`/post/${id}`}>{title}</Link>{" "}
						<TimeAgo date={created_at} className="postDate" />
					</li>
				))}
			</ul>
		</div>
	);
}

export default PostList;
