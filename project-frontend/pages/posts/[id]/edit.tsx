import { NextPage, NextPageContext } from 'next'
import Link from 'next/link'
import EditPostItem from '../../../components/EditPostItem'

type EditPostPageProps={
  id: string;
}

const EditPostPage: NextPage<EditPostPageProps>=({id})=>(
  <div>
    <h1>POST</h1>
    <EditPostItem id={id} />
    <hr />
    <Link href={`/posts/${id}`}>
      <a>Go back</a>
    </Link>
  </div>
);

EditPostPage.getInitialProps=(ctx: NextPageContext)=>{
  const {id}=ctx.query;
  return {id: typeof id === 'string' ? id : id[0]};
};

export default EditPostPage;