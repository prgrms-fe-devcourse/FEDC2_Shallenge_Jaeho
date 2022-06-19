import { useAtom } from "jotai";
import userAtom from "../../store/user";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const [user] = useAtom(userAtom);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

export default PrivateRoute;
