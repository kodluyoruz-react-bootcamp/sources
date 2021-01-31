import { useState } from "react";

import { useParams } from "react-router-dom";

import { useSubscription, useMutation } from "@apollo/client";
import { QUESTION_DETAIL_SUBSCRIPTION, NEW_VOTE } from "./queries";

function QuestionDetail() {
	const { id } = useParams();

	const [isVoted, setIsVoted] = useState(false);
	const [selectedOptionId, setSelectedOptionId] = useState(null);

	const [newVote, { loading: newVoteLoading }] = useMutation(NEW_VOTE, {
		onCompleted: () => {
			setIsVoted(true);
		},
	});

	const { loading, error, data } = useSubscription(
		QUESTION_DETAIL_SUBSCRIPTION,
		{
			variables: {
				id,
			},
		}
	);

	if (loading) return "Loading...";
	if (error) return `Error! ${error.message}`;

	const handleClick = () => {
		newVote({
			variables: {
				object: {
					option_id: selectedOptionId,
				},
			},
		});
	};

	const {
		questions_by_pk: { options, title },
	} = data;

	const total = options.reduce(
		(t, value) => t + value.votes_aggregate.aggregate.count,
		0
	);

	return (
		<div>
			<h2>{title}</h2>
			{options.map((option, i) => (
				<label htmlFor={i} key={i}>
					{!isVoted && (
						<input
							name="selected"
							value={option.id}
							id={i}
							type="radio"
							onChange={({ target }) => setSelectedOptionId(target.value)}
						/>
					)}
					<b>{option.title}</b>
					{isVoted && (
						<>
							<div>
								<progress
									id="file"
									value={option.votes_aggregate.aggregate.count}
									max={total}
								/>

								<span className="voteCount">
									{option.votes_aggregate.aggregate.count}{" "}
									{option.votes_aggregate.aggregate.count < 2
										? "vote"
										: "votes"}
								</span>

								<span>
									(
									{(
										(option.votes_aggregate.aggregate.count * 100) /
										(total === 0 ? 1 : total)
									).toFixed(2)}
									%)
								</span>
							</div>
						</>
					)}
				</label>
			))}

			{!isVoted && (
				<button onClick={handleClick} disabled={newVoteLoading}>
					Vote
				</button>
			)}
		</div>
	);
}

export default QuestionDetail;
