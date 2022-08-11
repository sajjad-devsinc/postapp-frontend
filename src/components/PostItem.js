/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const PostItem = (props) => {
  return (
    <>
      <tr>
        <td>{props.sr + 1}</td>
        <td>{props.item.title}</td>
        <td>{props.item.body}</td>
        {props.action ? (
          <td>
            <Link to={"../posts/edit/" + props.item._id} state={props.item}>
              Edit
            </Link>
            <button
              onClick={() => {
                props.deletefunc(props.item._id);
              }}
            >
              Delete
            </button>
          </td>
        ) : (
          <></>
        )}
      </tr>
    </>
  );
};

export default PostItem;
