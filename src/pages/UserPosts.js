import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useCookies } from "react-cookie";
import {get_user_posts, delete_post} from '../api/Posts';
import {user_id} from '../api/Users';
const UserPosts = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [check,setCheck]=useState();
  const [posts, setposts] = useState([]);
  useEffect(() => {
    const id=user_id(cookies);
    const post = get_user_posts(id,cookies);
    post.then(
      (result) => {
        console.log(result.data);
        setposts(result.data);
      }
    ).catch(
      (err)=>{
        console.log(err);
      }
    )

  }, [check]);
  const deletePost=(id)=>{
    delete_post(id);
    setCheck(id);
  }
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
                <tr key={key}>
                  <td scope="row">{key + 1}</td>
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
