/* eslint-disable no-undef */
import set_token from "./index";

const END_POINT = process.env.REACT_APP_API + "posts/";
const axios = set_token(localStorage.getItem("jwt"));

export const get_posts = () => axios.get(END_POINT);
export const new_post = (data) => axios.post(END_POINT, data);
export const edit_post = (id, data) => axios.put(END_POINT + id, data);
export const delete_post = (id) => axios.delete(END_POINT + id);
export const get_user_posts = (id) => axios.get(END_POINT + id);
export const get_user_drafts = (id) => axios.get(END_POINT + "drafts/" + id);
