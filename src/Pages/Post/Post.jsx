import React, { useEffect, useState } from 'react'
import PostCard from './Componenta/PostCard';
import axios from 'axios';

const Post = () => {
   
    const [postList, setPostList] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://json-placeholder.mock.beeceptor.com/posts"
      );
      setPostList(res.data);
    } catch (error) {
      
      setIsError(true); 
    } finally {
      setIsLoading(false);
    }
  };

  getData();
}, [])

if (isError) {
  return <p>Something went wrong</p>;
}
if (isLoading) {
  return <p>Loading...</p>;
}

  return (
    <div className="flex flex-col gap-6 ">
      {postList.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Post






// {
//   "userId": 1,
//   "id": 1,
//   "title": "Introduction to Artificial Intelligence",
//   "body": "Learn the basics of Artificial Intelligence and its applications in various industries.",
//   "link": "https://example.com/article1",
//   "comment_count": 8
// },