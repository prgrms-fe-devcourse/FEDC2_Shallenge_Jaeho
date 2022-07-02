import { useEffect } from "react";

import { useToast } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { fetchPostLogin, fetchPostSignUp } from "@/api/auth";
import AuthForm from "@/domain/LoginPage/AuthForm";
import usePageTitle from "@/hooks/usePageTitle";
import { saveTokenToLocalStorage } from "@/lib/localStorage";
import userAtom from "@/store/user";
import { User } from "@/types/index";

export interface FormData {
  logInEmail: string;
  logInPassword: string;
  signInEmail: string;
  signInFullName: string;
  signInPassword: string;
}

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
  const { setValue, handleSubmit } = useForm<FormData>();

  useEffect(() => {
    if (myUser) {
      navigate("/");
    }
  }, []);

  const onLogInSubmit = handleSubmit(async ({ logInEmail, logInPassword }) => {
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
        description: "로그인 실패했습니다!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  });

  const onSignUpSubmit = handleSubmit(
    async ({ signInEmail, signInFullName, signInPassword }) => {
      try {
        await fetchPostSignUp(signInEmail, signInFullName, signInPassword);
        toast({
          title: "signUp success",
          description: "회원가입 성공했습니다!",
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
      setValue={setValue}
      onLogInSubmit={onLogInSubmit}
      onSignUpSubmit={onSignUpSubmit}
    />
  );
};

export default LoginPage;
