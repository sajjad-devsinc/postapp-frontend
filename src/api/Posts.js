/* eslint-disable no-undef */
import setToken from "./index";

const END_POINT = process.env.REACT_APP_API + "posts/";
const axios = setToken(localStorage.getItem("jwt"));

export const getPosts = () => axios.get(END_POINT);
export const newPost = (data) => axios.post(END_POINT, data);
export const editPost = (id, data) => axios.put(END_POINT + id, data);
export const deletePost = (id) => axios.delete(END_POINT + id);
export const getUserPosts = (id) => axios.get(END_POINT + id);
export const getUserDrafts = (id) => axios.get(END_POINT + "drafts/" + id);
