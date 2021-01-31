import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://oyluyoruz.hasura.app/v1/graphql",
	cache: new InMemoryCache(),
});

export default client;
