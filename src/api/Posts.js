import axios from "axios";
require('./index');
const END_POINT = process.env.REACT_APP_API + "posts/";
export const get_posts = async () => {
  const data = await axios
    .get(END_POINT)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

export const new_post = (data) => {
  axios
    .post(END_POINT, data)
    .then((data) => {
      alert("post added successfully");
    })
    .catch((err) => {
      alert(err);
    });
};
export const edit_post = (id, data) => {
  axios
    .put(END_POINT + id, data)
    .then((data) => {
      alert("post updated successfully");
    })
    .catch((err) => {
      alert(err);
    });
};
export const delete_post = (id) => {
  axios
    .delete(END_POINT + id)
    .then((data) => {
      alert("post deleted successfully");
    })
    .catch((err) => {
      alert(err);
    });
};

export const get_user_posts = async (id, cookies) => {
  const data = await axios
    .get(END_POINT + id)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};
export const get_user_drafts = async (id, cookies) => {
  const data = await axios
    .get(END_POINT + "drafts/" + id)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};
