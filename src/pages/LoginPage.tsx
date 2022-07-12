import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

import AuthForm from "@domain/LoginPage/AuthForm";
import { fetchPostLogin, fetchPostSignUp } from "@api/auth";
import { saveTokenToLocalStorage } from "@lib/localStorage";
import userAtom from "@store/user";
import usePageTitle from "@hooks/usePageTitle";
import { User, FormData } from "src/types";
import { useEffect } from "react";

interface LoginResponse {
  data: {
    user: User;
    token: string;
  };
}

const LoginPage = () => {
  usePageTitle("Shallenge");
  const navigate = useNavigate();
  const toast = useToast();
  const [myUser, setMyUser] = useAtom(userAtom);
  const { register: logInRegister, handleSubmit: handleLogInSubmit } =
    useForm<FormData>();
  const {
    register: signUpRegister,
    handleSubmit: handleSignUpSubmit,
    watch,
  } = useForm<FormData>();

  useEffect(() => {
    if (myUser) {
      navigate("/");
    }
  }, []);

  const onLogInSubmit = handleLogInSubmit(
    async ({ logInEmail, logInPassword }) => {
      try {
        const response: LoginResponse = await fetchPostLogin(
          logInEmail,
          logInPassword
        );
        const { user, token } = response.data;
        saveTokenToLocalStorage(token);
        setMyUser(user);
        toast({
          title: "signUp success",
          description: "로그인 성공했습니다!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      } catch (err) {
        toast({
          title: "login failed",
          description: "로그인에 실패했습니다!",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  );

  const onSignUpSubmit = handleSignUpSubmit(
    async ({ signUpEmail, signUpFullName, signUpPassword }) => {
      try {
        await fetchPostSignUp(signUpEmail, signUpFullName, signUpPassword);
        toast({
          title: "signUp success",
          description: "회원가입에 성공했습니다!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login");
        location.reload();
      } catch (err) {
        toast({
          title: "signUp failed",
          description: "올바른 정보를 입력해주세요!",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  );

  return (
    <AuthForm
      logInRegister={logInRegister}
      signUpRegister={signUpRegister}
      watch={watch}
      onSignUpSubmit={onSignUpSubmit}
      onLogInSubmit={onLogInSubmit}
    />
  );
};

export default LoginPage;
