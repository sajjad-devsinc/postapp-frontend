import React from "react";
import { useFetch } from "../hooks/useFetch";
import * as PostHelper from "../api/Posts";
import Posts from "../components/Posts";

const AllPosts = () => {
  const [data, error, loading] = useFetch(PostHelper.getPosts, true);
  if (error) {
    alert(error);
  }
  return (
    <>
      {loading ? <>loading data</> : <></>}
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
          <tbody>{data ? <Posts data={data}></Posts> : <></>}</tbody>
        </table>
      </div>
    </>
  );
};

export default AllPosts;
