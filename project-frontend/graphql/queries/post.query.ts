import {gql} from '@apollo/client'
import {Post} from '../../type'

export const POST_QUERY=gql`
  query($id: ID!){
    post(id: $id){
      id
      title
      body
    }
  }
`;

export type PostData={
  post: Post;
}