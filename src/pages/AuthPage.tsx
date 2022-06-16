import AuthForm from "@domain/AuthPage/AuthForm";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export interface FormData {
  logInEmail: string;
  logInPassword: string;
  signInEmail: string;
  signInFullName: string;
  signInPassword: string;
}

const AuthPage = () => {
  const navigate = useNavigate();
  const { setValue, handleSubmit } = useForm<FormData>();
  const onLogInSubmit = handleSubmit(({ logInEmail, logInPassword }) => {
    console.log(logInEmail, logInPassword);
    // 로그인 api

    // 로그인 성공 시
    navigate("/");
  });
  const onSignUpSubmit = handleSubmit(
    ({ signInEmail, signInFullName, signInPassword }) => {
      console.log(signInEmail, signInFullName, signInPassword);
      // 회원가입 api

      // 회원가입 성공 시
      alert("회원가입이 완료되었습니다.");
      location.reload();
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
