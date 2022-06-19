import React from "react";
import useAuth from "@hooks/useAuth";
import { useAtom } from "jotai";
import userAtom from "../../store/user";
import { User } from "../../types/index";

interface Props {
  children: React.ReactNode;
}

function AuthProvider({ children }: Props) {
  const [_, setMyUser] = useAtom(userAtom);

  const { data: response, isLoading } = useAuth();

  if (isLoading) {
    return <></>;
  }

  if (response?.data) {
    setMyUser(response.data as User);
  }

  return <>{children}</>;
}

export default AuthProvider;
