import { gql } from '@apollo/client'
import { Post } from '../../type'

export const POSTS_QUERY=gql`
  query{
    posts{
      id
      title
    }
  }
`;

export type PostsData={
  posts: Post[];
}