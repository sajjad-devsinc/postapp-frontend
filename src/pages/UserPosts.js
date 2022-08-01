import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { get_user_posts, delete_post } from "../api/Posts";
import { user_id } from "../api/Users";
const UserPosts = () => {
  const [cookies] = useCookies();
  const [check, setCheck] = useState("");
  const [posts, setposts] = useState([]);
  const user_posts = async () => {
    try {
      const id = user_id(cookies);
      const post = await get_user_posts(id);
      setposts(post.data);
    } catch (err) {
      alert("internal server error");
    }
  };

  useEffect(() => {
    user_posts();
  }, [check]);
  const deletePost = async (id) => {
    try {
      await delete_post(id);
      setCheck(id);
    } catch (err) {
      alert("internal server error");
    }
  };
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
            {posts.map((item, key) => {
              return (
                <tr key={item._id}>
                  <td>{key + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>
                    <Link to={"../posts/edit/" + item._id} state={item}>
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        deletePost(item._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default UserPosts;
