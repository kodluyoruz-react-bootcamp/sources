import { gql } from "@apollo/client";

export const GET_USERS = gql`
	query GetUsers {
		users(order_by: { created_at: desc }) {
			id
			name
			surname
			posts_aggregate(where: { isPublished: { _eq: true } }) {
				aggregate {
					count
				}
			}
		}
	}
`;
