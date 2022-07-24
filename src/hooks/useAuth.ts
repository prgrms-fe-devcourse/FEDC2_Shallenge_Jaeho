import { useEffect } from "react";

import { useAtom } from "jotai";
import { useQuery } from "react-query";

import { fetchGetAuthUser } from "@/api/auth";
import userAtom from "@/store/user";

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
