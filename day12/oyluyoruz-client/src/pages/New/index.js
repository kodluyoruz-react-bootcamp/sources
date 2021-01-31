import { useState } from "react";

function New() {
	const [question, setQuestion] = useState("");
	const [options, setOptions] = useState(["", ""]);

	const handleChangeOption = ({ target }) => {
		const newArray = options;
		newArray[target.id] = target.value;

		setOptions([...newArray]);
	};

	const handleCreate = () => {
		console.log(question);
		console.log(options);
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
						value={option}
						onChange={handleChangeOption}
					/>
				</div>
			))}

			<button onClick={() => setOptions([...options, ""])}>New Option</button>
			<button onClick={handleCreate}>Create Poll</button>
		</div>
	);
}

export default New;
