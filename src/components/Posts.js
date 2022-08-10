import React from "react";
import PostItem from "./PostItem";

const Posts = (props) => {
  return (
    <>
      {props.data.map((item, key) => {
        return (
          <PostItem
            key={item._id}
            sr={key}
            item={item}
            action={props.action}
            deletefunc={props.deletefunc}
          ></PostItem>
        );
      })}
    </>
  );
};

export default React.memo(Posts);
