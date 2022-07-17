import userAtom from "@store/user";
import { useAtom } from "jotai";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const [user] = useAtom(userAtom);

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
