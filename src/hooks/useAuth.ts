import { fetchGetAuthUser } from "@api/auth";
import { useQuery } from "react-query";

const useAuth = () => {
  return useQuery(["auth"], fetchGetAuthUser);
};

export default useAuth;
