import React, { useCallback } from "react";
import Posts from "../components/Posts";
import { useFetch } from "../hooks/useFetch";
import * as PostHelper from "../api/Posts";

const UserDrafts = () => {
  const [data, error, loading] = useFetch(PostHelper.getUserDrafts, false);
  if (error) {
    alert(error);
  }

  const deletePost = useCallback(async (id) => {
    try {
      await PostHelper.deletePost(id);
      alert("post deleted successfully");
    } catch (err) {
      alert("internal server error");
    }
  }, []);

  return (
    <>
      {loading ? <>loading Data</> : <></>}
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
            {data ? (
              <Posts data={data} action={true} deletefunc={deletePost}></Posts>
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default UserDrafts;
