import React, { useEffect, useState } from "react";
import PostCard from "./Componenta/PostCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsPostError,
  setIsPostLoading,
  setPostList,
} from "../../redux/Slices/postSlice";

const Post = () => {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.post);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://json-placeholder.mock.beeceptor.com/posts"
        );
        dispatch(setPostList(res.data));
      } catch (error) {
        dispatch(setIsPostError(true));
      } finally {
        dispatch(setIsPostLoading(false));
      }
    };

    getData();
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
