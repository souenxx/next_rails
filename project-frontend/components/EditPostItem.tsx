import {useQuery,useMutation} from '@apollo/client'
import {NextPage} from 'next'
import {ChangeEvent, useState} from 'react'
import {
  UPDATE_POST,
  UpdatePostData,
  PostInputType,
} from '../graphql/mutations/update-post.mutation';
import {PostData,POST_QUERY} from '../graphql/queries/post.query';
import {Post} from '../type';

type EditPostItemProps={
  id: string;
}

const EditPostItem: NextPage<EditPostItemProps>=({id})=>{
  const [post,setPost]=useState<Post>(null);
  const [message,setMessage]=useState<string>('');

  const [updatePost,mutationResult]=useMutation<
    UpdatePostData,
    PostInputType
  >(UPDATE_POST);
  const mutationError=mutationResult.error;
  const {loading,error,data}=useQuery<PostData>(POST_QUERY,{
    variables: {id: parseInt(id)},
  });

  if (loading) return <p>loading...</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  if (!post) setPost(data.post);
  if (!post) return null;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage('');
    const {name,value} = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSave = async () => {
    await updatePost({
      variables: {
        params: {
          id: parseInt(post.id),
          title: post.title,
          body: post.body,
        },
      },
    });

    mutationError
      ? alert(`Error: ${JSON.stringify(mutationError)}`)
      : setMessage('Successfully saved');
  };

  return (
    <div>
      <div>
        <button onClick={handleSave}>Save</button>
        {message ? <span className="message">{message}</span> : null}
      </div>
      <span className="form-field">
        <input name="title" value={post.title} onChange={handleChange} />
      </span>
      <span className="form-field">
        <textarea
          name="body"
          value={post.body}
          rows={10}
          onChange={handleChange}
        />
      </span>
      <style jsx>
        {`
          input,
          textarea{
            width: 100%;
          }
          span.form-field{
            display: block;
            overflow: hideen;
            padding: 0 5px 0 0;
            margin: 10px auto;
          }
          button {
            margin-right: 5px;
          }
          span.message{
            font-size: 0.8rem;
            color: #0018f9;
          }
        `}
      </style>
    </div>
  );
};

export default EditPostItem;