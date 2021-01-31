import { useState } from "react";
import { useMutation } from "@apollo/client";

import { NEW_QUESTION } from "./queries";

import { Redirect } from "react-router-dom";

const initialOptions = [{ title: "" }, { title: "" }];

function New() {
	const [addQuestion, { loading, data }] = useMutation(NEW_QUESTION, {
		onCompleted: () => {
			setQuestion("");
			setOptions(initialOptions);
		},
	});

	const [question, setQuestion] = useState("");
	const [options, setOptions] = useState(initialOptions);

	const handleChangeOption = ({ target }) => {
		const newArray = options;
		newArray[target.id].title = target.value;

		setOptions([...newArray]);
	};

	const handleCreate = () => {
		const filledOptions = options.filter((option) => option.title !== "");

		if (question === "" || filledOptions.length < 2) return;

		addQuestion({
			variables: {
				object: {
					title: question,
					options: {
						data: filledOptions,
					},
				},
			},
		});
	};

	const questionId = data?.insert_questions_one.id;
	if (questionId) {
		return <Redirect to={`/q/${questionId}`} />;
	}

	return (
		<div>
			<input
				type="text"
				placeholder="Type your question here"
				value={question}
				onChange={({ target }) => setQuestion(target.value)}
				disabled={loading}
			/>

			<h2>Options</h2>
			{options.map((option, key) => (
				<div key={key}>
					<input
						type="text"
						placeholder="Enter poll option"
						id={key}
						value={option.title}
						onChange={handleChangeOption}
						disabled={loading}
					/>
				</div>
			))}

			<button onClick={() => setOptions([...options, { title: "" }])}>
				New Option
			</button>
			<button onClick={handleCreate} disabled={loading}>
				Create Poll
			</button>
		</div>
	);
}

export default New;
