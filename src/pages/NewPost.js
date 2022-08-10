import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Postform from "../components/PostForm";
import { useCookies } from "react-cookie";
import * as UserHelper from "../api/Users";
import * as PostHelper from "../api/Posts";

const NewPost = () => {
  const [cookies] = useCookies();
  const navigate = useNavigate();
  const [data, setdata] = useState({
    title: "",
    body: "",
    isPublish: true,
    userId: UserHelper.user_id(cookies),
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
        alert("Internal server error");
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
        PostHelper.new_post(temp);
        navigate(-1);
      } catch (err) {
        alert("Internal server error");
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
