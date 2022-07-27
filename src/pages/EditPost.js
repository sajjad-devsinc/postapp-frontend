import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Postform from "../components/PostForm";
import {edit_post} from '../api/Posts';
const EditPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setdata] = useState(location.state);

  const handlerInput = (e) => {
    const { name, value } = e.target;

    setdata({ ...data, [name]: value });
  };
  const editpost = () => {
    if (data.title === "" || data.body === "") {
      alert("Please enter all fields");
    } else {
      const temp = data;
      temp.isPublish=true;
      edit_post(location.state._id,temp);
      navigate(-1);

    }
  };
  const draftpost = () =>{
    if (data.title === "" || data.body === "") {
      alert("Please enter all fields");
    } else {
      const temp = data;
      temp.isPublish=false;
      edit_post(location.state._id,temp);
      navigate(-1);
    }

  }
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
