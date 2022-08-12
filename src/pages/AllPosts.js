import React, { useEffect, useState } from "react";
import * as PostHelper from "../api/Posts";
import Posts from "../components/Posts";

const AllPosts = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    const post = async () => {
      try {
        const post = await PostHelper.get_posts();
        setposts(post.data);
      } catch (err) {
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
            <Posts data={posts}></Posts>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllPosts;
