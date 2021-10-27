import {gql} from '@apollo/client'
import {Post} from '../../type'

export const UPDATE_POST=gql`
  mutation($params: PostInputType!){
    updatePost(input: {params: $params}){
      id
      title
      body
    }
  }
`;

export type UpdatePostData={
  post: Post;
}

export type PostInputType={
  params:{
    id: number;
    title?: string;
    body?: string;
  };
}