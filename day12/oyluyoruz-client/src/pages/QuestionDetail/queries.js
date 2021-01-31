import { gql } from "@apollo/client";

export const QUESTION_DETAIL_SUBSCRIPTION = gql`
	subscription QuestionDetailSubscription($id: Int!) {
		questions_by_pk(id: $id) {
			id
			title
			options {
				id
				title
				votes_aggregate {
					aggregate {
						count
					}
				}
			}
		}
	}
`;

export const NEW_VOTE = gql`
	mutation NewVote($object: votes_insert_input!) {
		insert_votes_one(object: $object) {
			id
		}
	}
`;