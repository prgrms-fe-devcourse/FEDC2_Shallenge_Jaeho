import { useAtom } from "jotai";
import { Navigate, Outlet } from "react-router-dom";

import userAtom from "@store/user";

function PrivateRoute() {
  const [user] = useAtom(userAtom);

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
