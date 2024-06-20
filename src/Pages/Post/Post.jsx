import React, { useEffect, useState } from "react";
import PostCard from "./Componenta/PostCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPostData } from "../../redux/Slices/postSlice";

const Post = () => {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostData());
  }, []);

  if (postState.isError) {
    return <p>Something went wrong</p>;
  }
  if (postState.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col gap-6 ">
      {postState.postList.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Post;
