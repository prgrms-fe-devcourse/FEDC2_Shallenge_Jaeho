import { useEffect } from "react";
import { useQuery } from "react-query";
import { useAtom } from "jotai";

import userAtom from "@store/user";
import { fetchGetAuthUser } from "@api/auth";

const useAuth = () => {
  const [, setMyUser] = useAtom(userAtom);
  const { data: response, isLoading } = useQuery(["auth"], fetchGetAuthUser);

  useEffect(() => {
    if (response?.data) {
      setMyUser(response.data);
    }
  }, [response]);

  return [isLoading];
};

export default useAuth;
