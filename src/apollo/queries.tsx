import { gql } from "@apollo/client";

export const GET_VIDEO_GAMES = gql`
query GetVideoGames{
    games {
      id
      poster
      price
      title
      isInCart @client
    }
}
`;

export const GET_VIDEO_GAME = gql`
query GetVideoGames($id: ID!){
  game(id: $id) {
    id
    poster
    price
    store
    title
    weight
    brand
    isInCart @client
  }
}
`;