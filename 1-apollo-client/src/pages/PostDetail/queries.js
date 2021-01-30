import { gql } from "@apollo/client";

export const GET_POST_DETAIL = gql`
	query GetPostDetail($id: Int!) {
		posts_by_pk(id: $id) {
			id
			title
			description
			media_url
			created_at
		}
	}
`;
