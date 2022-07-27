import { useNavigate } from "react-router-dom";
import { useEffect} from "react";
import { useCookies } from "react-cookie";
const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const [cookies] = useCookies();
  const navigate = useNavigate();
  useEffect(
    ()=>{
      if (!cookies.jwt) {
        return navigate(redirectPath);
      }
    },[]
  )
  return children;
};
export default ProtectedRoute;
