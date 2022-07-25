import React, { useEffect, useState } from "react";
import { get_posts } from "../api/Posts";
const AllPosts = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    const post = async () => {
      const data = await get_posts();
      setposts(data.data);
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
                <tr key={key}>
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