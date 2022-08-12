import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Postform from "../components/PostForm";
import * as UserHelper from "../api/Users";
import * as PostHelper from "../api/Posts";

const NewPost = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    title: "",
    body: "",
    isPublish: true,
    userId: UserHelper.user_id(),
  });

  const handlerInput = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const addpost = useCallback(async () => {
    if (data.title === "" || data.body === "") {
      alert("Please enter all fields");
    } else {
      try {
        await PostHelper.new_post(data);
        alert("post added successfully");
        navigate(-1);
      } catch (err) {
        if (err.response.status === 422)
          alert(
            "invalid data : title should have minimum 6 chracters and body should have minimum 10 characters"
          );
        else alert("Internal Server Error");
      }
    }
  }, [data, navigate]);

  const draftpost = useCallback(async () => {
    if (data.title === "" || data.body === "") {
      alert("Please enter all fields");
    } else {
      try {
        const temp = data;
        temp.isPublish = false;
        await PostHelper.new_post(temp);
        navigate(-1);
      } catch (err) {
        if (err.response.status === 422)
          alert(
            "invalid data : title should have minimum 6 chracters and body should have minimum 10 characters"
          );
        else alert("Internal Server Error");
      }
    }
  }, [data, navigate]);

  return (
    <>
      <div className="App">
        <h1 className="center">Add a Post</h1>
        <br></br>
        <Postform
          formdata={data}
          setdata={handlerInput}
          submitfunc={addpost}
          draftfunc={draftpost}
        />
      </div>
    </>
  );
};

export default NewPost;
