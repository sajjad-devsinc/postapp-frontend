import axios from "axios";
import jwt_decode from "jwt-decode";
const end_point=process.env.REACT_APP_API;
export const user_signup=(data,navigate)=>{
    axios.post(end_point+'users/signup',data).then(
        (result)=>{
            alert("signup successfully now you can login");
            navigate("/login");
        }
    ).catch(
        (err)=>{
            alert("email already exist");
        }
    )
}
export const user_login=(data,navigate)=>{
    axios.post(end_point+'users/login',data).then(
        (result)=>{
            axios.defaults.headers.common.Authorization = `Bearer ${result.data.token}`;
            navigate("/profile");
        }
    ).catch(
        (err)=>{
            alert("invalid Email or Password");
            console.log(err);
        }
    )
}

export const user_id=(cookies)=>{
    if(cookies.jwt){
        const decoded = jwt_decode(cookies.jwt);
        const id = decoded.user._id;
        return id;
      }

}