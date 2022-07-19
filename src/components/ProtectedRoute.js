import { useNavigate } from "react-router-dom";
import { useEffect} from "react";
import { useCookies } from "react-cookie";
const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();
  useEffect(
    ()=>{

      if (!cookies.jwt) {
        console.log(cookies.jwt);
        console.log("user not login");
        return navigate(redirectPath);
      }

    },[]
  )
  return children;
};
export default ProtectedRoute;
