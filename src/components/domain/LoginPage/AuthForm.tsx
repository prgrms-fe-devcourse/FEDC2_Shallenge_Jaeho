/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Button,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FormData } from "@pages/LoginPage";
import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";

const TabsContainer = styled.div`
  margin-top: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 6px 0;
`;

const CTab = styled(Tab)`
  background-color: ${({ isSelectedTab }) =>
    isSelectedTab ? "#ffffff" : "#E2E8F0"};
  color: ${({ isSelectedTab }) => (isSelectedTab ? "#ff7900" : "#ffffff")};
  font-size: 24px;
  font-weight: ${({ isSelectedTab }) => (isSelectedTab ? "700" : "")};
  border: "none";
`;

const CInput = styled(Input)`
  min-width: calc(100% - 210px);
  width: 320px;
  margin-bottom: 24px;
  border-color: var(--chakra-colors-gray-300);
`;

const Form = styled.form`
  height: 388px;
  display: flex;
  align-items: center;
`;

const CButton = styled(Button)`
  width: 320px;
  height: 68px;
  color: white;
  font-weight: 600;
  font-size: 24px;
  background-color: #ffaa6d;

  &:hover {
    background-color: #ff7900;
  }
`;

interface AuthFormProps {
  setValue: UseFormSetValue<FormData>;
  onLogInSubmit: (
    e?: React.BaseSyntheticEvent<object, unknown, unknown> | undefined
  ) => Promise<void>;
  onSignUpSubmit: (
    e?: React.BaseSyntheticEvent<object, unknown, unknown> | undefined
  ) => Promise<void>;
}

const AuthForm = ({
  setValue,
  onLogInSubmit,
  onSignUpSubmit,
}: AuthFormProps) => {
  const [tabIndex, setTabIndex] = useState(0);

  const inputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const max = parseInt(e.currentTarget.getAttribute("maxlength"));
    if (target.value.length > max) {
      target.value = target.value.slice(0, max);
    }
    setValue("signUpFullName", target.value);
  };

  return (
    <TabsContainer>
      <Tabs variant="unstyled" isFitted align="center">
        <TabList height={20}>
          <CTab
            isSelectedTab={tabIndex === 0}
            borderTopRadius={15}
            onClick={() => setTabIndex(0)}
          >
            로그인
          </CTab>
          <CTab
            isSelectedTab={tabIndex === 1}
            borderTopRadius={15}
            onClick={() => setTabIndex(1)}
          >
            회원가입
          </CTab>
        </TabList>
        <TabPanels style={{ backgroundColor: "white" }}>
          <TabPanel>
            <Form onSubmit={onLogInSubmit}>
              <div>
                <CInput
                  type="email"
                  required
                  placeholder="이메일을 입력하세요"
                  focusBorderColor="none"
                  onChange={(e) => {
                    setValue("logInEmail", e.target.value);
                  }}
                />
                <CInput
                  type="password"
                  required
                  placeholder="비밀번호를 입력하세요"
                  focusBorderColor="none"
                  onChange={(e) => {
                    setValue("logInPassword", e.target.value);
                  }}
                />
                <CButton type="submit">로그인</CButton>
              </div>
            </Form>
          </TabPanel>
          <TabPanel>
            <Form onSubmit={onSignUpSubmit}>
              <div>
                <CInput
                  type="email"
                  required
                  placeholder="이메일을 입력하세요"
                  focusBorderColor="none"
                  onChange={(e) => {
                    setValue("signUpEmail", e.target.value);
                  }}
                />
                <CInput
                  type="text"
                  required
                  placeholder="닉네임을 입력하세요"
                  maxLength={6}
                  focusBorderColor="none"
                  onKeyUp={inputHandler}
                  onChange={(e) => {
                    setValue("signUpFullName", e.target.value);
                  }}
                />
                <CInput
                  type="password"
                  required
                  placeholder="비밀번호를 입력하세요"
                  focusBorderColor="none"
                  onChange={(e) => {
                    setValue("signUpPassword", e.target.value);
                  }}
                />
                <CInput
                  type="password"
                  required
                  placeholder="비밀번호 확인을 입력하세요"
                  focusBorderColor="none"
                />
                <CButton type="submit">회원가입</CButton>
              </div>
            </Form>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </TabsContainer>
  );
};

export default AuthForm;
