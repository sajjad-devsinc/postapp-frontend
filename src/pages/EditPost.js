import React, { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Postform from "../components/PostForm";
import * as PostHelper from "../api/Posts";

const EditPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setdata] = useState(location.state);

  const handlerInput = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const editpost = useCallback(async () => {
    if (data.title === "" || data.body === "") {
      alert("Please enter all fields");
    } else {
      try {
        const temp = data;
        temp.isPublish = true;
        await PostHelper.editPost(location.state._id, temp);
        navigate(-1);
      } catch (err) {
        if (err.response.status === 422)
          alert(
            "invalid data : title should have minimum 6 chracters and body should have minimum 10 characters"
          );
        else alert("Internal Server Error");
      }
    }
  }, [data, navigate, location]);

  const draftpost = useCallback(async () => {
    if (data.title === "" || data.body === "") {
      alert("Please enter all fields");
    } else {
      const temp = data;
      temp.isPublish = false;
      try {
        await PostHelper.editPost(location.state._id, temp);
        alert("post updated successfully");
        navigate(-1);
      } catch (err) {
        if (err.response.status === 422)
          alert(
            "invalid data : title should have minimum 6 chracters and body should have minimum 10 characters"
          );
        else alert("Internal Server Error");
      }
    }
  }, [data, navigate, location]);

  return (
    <>
      <div className="App">
        <h1 className="center">Edit a Post</h1>
        <br></br>
        <Postform
          formdata={data}
          setdata={handlerInput}
          submitfunc={editpost}
          draftfunc={draftpost}
        />
      </div>
    </>
  );
};

export default EditPost;
