import { useState } from "react";
import { useMutation } from "@apollo/client";

import { NEW_QUESTION } from "./queries";

function New() {
	const [addQuestion, { data }] = useMutation(NEW_QUESTION);

	const [question, setQuestion] = useState("");
	const [options, setOptions] = useState([{ title: "a" }, { title: "b" }]);

	const handleChangeOption = ({ target }) => {
		const newArray = options;
		newArray[target.id].title = target.value;

		setOptions([...newArray]);
	};

	const handleCreate = () => {
		addQuestion({
			variables: {
				object: {
					title: question,
					options: {
						data: options,
					},
				},
			},
		});
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Type your question here"
				value={question}
				onChange={({ target }) => setQuestion(target.value)}
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
					/>
				</div>
			))}

			<button onClick={() => setOptions([...options, { title: "" }])}>
				New Option
			</button>
			<button onClick={handleCreate}>Create Poll</button>
		</div>
	);
}

export default New;
