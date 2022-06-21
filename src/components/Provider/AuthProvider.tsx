import React from "react";
import { useAtom } from "jotai";

import useAuth from "@hooks/useAuth";
import userAtom from "@store/user";
import InputLayout from "@layout/InputLayout";

interface Props {
  children: React.ReactNode;
}

function AuthProvider({ children }: Props) {
  const [, setMyUser] = useAtom(userAtom);

  const { data: response, isLoading } = useAuth();

  if (isLoading) {
    return <InputLayout />;
  }

  if (response?.data) {
    setMyUser(response.data);
  }

  return <>{children}</>;
}

export default AuthProvider;
