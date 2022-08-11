import React, { useEffect, useState, useCallback } from "react";
import Posts from "../components/Posts";
import * as UserHelper from "../api/Users";
import * as PostHelper from "../api/Posts";

const UserDrafts = () => {
  const [posts, setposts] = useState([]);
  const [check, setcheck] = useState();

  useEffect(() => {
    const user_drafts = async () => {
      try {
        const id = UserHelper.user_id();
        const post = await PostHelper.get_user_drafts(id);
        setposts(post.data);
      } catch (err) {
        alert("internal server error");
      }
    };
    user_drafts();
  }, [check]);

  const deletePost = useCallback(async (id) => {
    try {
      await PostHelper.delete_post(id);
      setcheck(id);
      alert("post deleted successfully");
    } catch (err) {
      alert("internal server error");
    }
  }, []);

  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr.no</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <Posts data={posts} action={true} deletefunc={deletePost}></Posts>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default UserDrafts;
