import AuthForm from "@domain/LoginPage/AuthForm";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { fetchPostLogin, fetchPostSignUp } from "@api/auth";
import { saveTokenToLocalStorage } from "@lib/localStorage";
import { useAtom } from "jotai";
import userAtom from "../store/user";
import { User } from "src/types";

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

const AuthPage = () => {
  const navigate = useNavigate();
  const [myUser, setMyUser] = useAtom(userAtom);
  const { setValue, handleSubmit } = useForm<FormData>();

  if (myUser) {
    navigate("/");
  }

  const onLogInSubmit = handleSubmit(async ({ logInEmail, logInPassword }) => {
    try {
      const response: LoginResponse = await fetchPostLogin(
        logInEmail,
        logInPassword
      );
      const { user, token } = response.data;
      saveTokenToLocalStorage(token);
      setMyUser(user);
      navigate("/");
    } catch (err) {
      console.log("로그인실패로직");
    }
  });

  const onSignUpSubmit = handleSubmit(
    async ({ signInEmail, signInFullName, signInPassword }) => {
      try {
        await fetchPostSignUp(signInEmail, signInFullName, signInPassword);
        alert("회원가입성공! 다시로그인해주세요");
        navigate("/login");
      } catch (err) {
        console.log("회원가입로직실패");
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

export default AuthPage;
