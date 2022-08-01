import axios from './index';
require('./index.js');
const END_POINT = process.env.REACT_APP_API + "posts/";

export const get_posts = () => axios.get(END_POINT);
export const new_post = (data) => axios.post(END_POINT, data);
export const edit_post = (id, data) => axios.put(END_POINT + id, data);
export const delete_post = (id) => axios.delete(END_POINT + id);
export const get_user_posts = async (id) => axios.get(END_POINT + id);
export const get_user_drafts = async (id) => axios.get(END_POINT + "drafts/" + id);


