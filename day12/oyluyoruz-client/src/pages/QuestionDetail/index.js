import React from "react";

import { useParams } from "react-router-dom";

function QuestionDetail() {
	const { id } = useParams();

	console.log(id);
	return <div>question detail</div>;
}

export default QuestionDetail;
