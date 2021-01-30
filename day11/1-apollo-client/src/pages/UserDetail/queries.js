import { gql } from "@apollo/client";

export const GET_USER_DETAIL = gql`
	query GetUserDetail($id: uuid!) {
		users_by_pk(id: $id) {
			id
			name
			surname
			age
			created_at
			posts(
				where: { isPublished: { _eq: true } }
				order_by: { created_at: desc }
			) {
				id
				title
				created_at
			}
		}
	}
`;
