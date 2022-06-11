import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AppContainerProps {
  children: ReactNode;
}

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <div>
      <h1>헤더</h1>
      <main>{children}</main>
      <div>
        <Link to={"/goals"}>Goals</Link>
        <Link to={"/notification"}>Notification</Link>
        <Link to={`/profile/123`}>Profile</Link>
      </div>
    </div>
  );
};

export default AppContainer;
