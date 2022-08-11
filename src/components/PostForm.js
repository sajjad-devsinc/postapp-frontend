/* eslint-disable react/prop-types */
import React from "react";

const PostForm = (props) => {
  const handlerInput = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handlerInput}>
        <input
          className="form-control"
          type="text"
          placeholder="Enter title"
          value={props.formdata.title}
          onChange={props.setdata}
          name="title"
        />
        <input
          className="form-control"
          type="text"
          placeholder="Enter Content"
          value={props.formdata.body}
          onChange={props.setdata}
          name="body"
        />
        <input
          className="form-control"
          type="submit"
          onClick={() => {
            props.submitfunc();
          }}
          value="Publish"
        />
        <input
          className="form-control"
          type="submit"
          onClick={() => {
            props.draftfunc();
          }}
          value="Draft"
        />
      </form>
    </>
  );
};

export default React.memo(PostForm);
