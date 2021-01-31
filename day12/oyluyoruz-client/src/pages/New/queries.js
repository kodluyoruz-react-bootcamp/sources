import { gql } from "@apollo/client";

export const NEW_QUESTION = gql`
	mutation NewQuestion($object: questions_insert_input!) {
		insert_questions_one(object: $object) {
			id
			title
		}
	}
`;
