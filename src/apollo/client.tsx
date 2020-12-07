import { ApolloClient } from '@apollo/client';
import cache from './cache';

const client = new ApolloClient({
    uri: 'https://fakeql.com/graphql/6724df975b54de11f7fd9eb15bafc0ce',
    cache: cache
});

export default client;