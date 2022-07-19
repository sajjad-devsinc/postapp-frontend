import axios from "axios";
const end_point=process.env.REACT_APP_API;
export const get_posts= async ()=>{
    const data = await axios.get(end_point+"index").then(
        (result)=>{
            return result;
            
        }
    ).catch(
        (err)=>{
            return err;
        }
    )
    return data;
 
}

export const new_post=(data)=>{
    axios.post(end_point+"posts/new",data).then(
        (data)=>{
            alert("post added successfully");
        }
    ).catch(
        (err)=>{
            console.log(err);
        }
    )

}
export const edit_post=(id,data)=>{
    console.log(data);
    axios.put(end_point+"posts/edit/"+id,data).then(
        (data)=>{
            alert("post updated successfully");
        }
    ).catch(
        (err)=>{
            console.log(err);
        }
    )

}
export const delete_post=(id)=>{
    axios.delete(end_point+"posts/delete/"+id).then(
        (data)=>{
            alert("post deleted successfully");
        }
    ).catch(
        (err)=>{
            console.log(err);
        }
    )

}

export const get_user_posts= async (id,cookies)=>{
    axios.defaults.headers.common.Authorization = `Bearer ${cookies.jwt}`;
    const data = await axios.get(end_point+"posts/"+id).then(
        (result)=>{
           return result;             
        }
    ).catch(
        (err)=>{
            return err;
        }
    )
    return data;
 
}
export const get_user_drafts= async (id,cookies)=>{
    axios.defaults.headers.common.Authorization = `Bearer ${cookies.jwt}`;
    const data = await axios.get(end_point+"posts/drafts/"+id).then(
        (result)=>{
           return result;             
        }
    ).catch(
        (err)=>{
            return err;
        }
    )
    return data;
 
}