import { useAtom } from "jotai";
import userAtom from "../../store/user";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const [user] = useAtom(userAtom);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;
