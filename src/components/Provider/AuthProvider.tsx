import React from "react";

import useAuth from "@hooks/useAuth";
import InputLayout from "@layout/InputLayout";

interface Props {
  children: React.ReactNode;
}

function AuthProvider({ children }: Props) {
  const [isLoading] = useAuth();

  if (isLoading) {
    return <InputLayout />;
  }

  return <>{children}</>;
}

export default AuthProvider;
