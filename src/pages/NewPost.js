import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Postform from "../components/PostForm";
import { user_id } from "../api/Users";
import { useCookies } from "react-cookie";
import {new_post} from '../api/Posts';
const NewPost = () => {
  const [cookies] = useCookies();
  const navigate = useNavigate();
  const [data, setdata] = useState({
    title: "",
    body: "",
    isPublish: true,
    userId: user_id(cookies),
  });

  const handlerInput = (e) => {
    const { name, value } = e.target;

    setdata({ ...data, [name]: value });
  };
  const addpost = () => {
    if (data.title === "" || data.body === "") {
      alert("Please enter all fields");
    } else {
      new_post(data);
      navigate(-1)

    }
  };
  const draftpost = () =>{
    if (data.title === "" || data.body === "") {
      alert("Please enter all fields");
    } else {
      const temp = data;
      temp.isPublish=false;
      new_post(temp);
      navigate(-1)
    }
  }
  return (
    <>
      <div className="App">
        <h1 className="center">Add a Post</h1>

        <br></br>
        <Postform formdata={data} setdata={handlerInput} submitfunc={addpost} draftfunc={draftpost} />
      </div>
    </>
  );
};

export default NewPost;
