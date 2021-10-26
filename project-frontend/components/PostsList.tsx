import Link from 'next/link'
import {useQuery} from '@apollo/client'
import {POSTS_QUERY,PostsData} from '../graphql/queries/posts.query'
import {NextPage} from 'next'

type PostsListProps={}

const PostsList: NextPage<PostsListProps>=()=>{
  const { loading,error,data } = useQuery<PostsData>(POSTS_QUERY)

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error: {JSON.stringify(error)}</p>

  const { posts } = data;
  if(!posts) return null;

  return(
    <ul>
      {posts.map((post,index)=>{
        return(
          <li key={index}>
            {post.title}{' '}
            <Link href={`/posts/${post.id}`}>
              <a>[Detail]</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default PostsList;