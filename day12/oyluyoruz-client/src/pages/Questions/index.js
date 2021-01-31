import React from "react";

import { useSubscription } from "@apollo/client";
import { QUESTION_SUBSCRIPTION } from "./queries";

import { Link } from "react-router-dom";

function Questions() {
	const { data, loading } = useSubscription(QUESTION_SUBSCRIPTION);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h2>Questions</h2>

			{data.questions.map((q, i) => (
				<div key={i}>
					<Link to={`/q/${q.id}`}>{q.title}</Link>
				</div>
			))}
		</div>
	);
}

export default Questions;
