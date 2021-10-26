import {NextPage,NextPageContext} from 'next'
import Link from 'next/link'
import PostItem from '../../components/PostItem'

type PostPageProps={
  id: string;
}

const PostPage: NextPage<PostPageProps>=({ id })=>(
  <div>
    <h1>POST</h1>
    <PostItem id={id} />
    <hr />
    <Link href="/">
      <a>Go back</a>
    </Link>
  </div> 
);

PostPage.getInitialProps=(ctx: NextPageContext)=>{
  const { id }=ctx.query;
  return { id: typeof id ==='string' ? id : id[0] };
}

export default PostPage;