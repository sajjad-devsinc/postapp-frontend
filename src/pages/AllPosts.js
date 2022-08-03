import React, { useEffect, useState } from "react";
import { get_posts } from "../api/Posts";
const AllPosts = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    const post = async () => {
      try {
        const post = await get_posts();
        setposts(post.data);
      } catch(err) {
        alert("internal server errora");
      }
    };
    post();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="center">All Posts</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr.no</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item, key) => {
              return (
                <tr key={item._id}>
                  <td>{key + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default AllPosts;
