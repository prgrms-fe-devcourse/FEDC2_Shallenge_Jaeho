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

const CInput = styled(Input)`
  min-width: calc(100% - 210px);
  width: 320px;
  margin-bottom: 24px;
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
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  onSignUpSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}
const AuthForm = ({
  setValue,
  onLogInSubmit,
  onSignUpSubmit,
}: AuthFormProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <TabsContainer>
      <Tabs isFitted variant="enclosed" align="center">
        <TabList>
          <Tab
            fontSize={24}
            style={{
              backgroundColor: selectedTab === 0 ? "white" : "#E2E8F0",
              color: selectedTab === 0 ? "#ff7900" : "white",
              fontWeight: selectedTab === 0 ? "700" : "",
              border: "none",
            }}
            onClick={() => setSelectedTab(0)}
          >
            로그인
          </Tab>
          <Tab
            fontSize={24}
            style={{
              backgroundColor: selectedTab === 1 ? "white" : "#E2E8F0",
              color: selectedTab === 1 ? "#ff7900" : "white",
              fontWeight: selectedTab === 1 ? "700" : "",
              border: "none",
            }}
            onClick={() => setSelectedTab(1)}
          >
            회원가입
          </Tab>
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
                <CButton style={{}} type="submit">
                  로그인
                </CButton>
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
                    setValue("signInEmail", e.target.value);
                  }}
                />
                <CInput
                  type="text"
                  required
                  placeholder="닉네임을 입력하세요"
                  focusBorderColor="none"
                  onChange={(e) => {
                    setValue("signInFullName", e.target.value);
                  }}
                />
                <CInput
                  type="password"
                  required
                  placeholder="비밀번호를 입력하세요"
                  focusBorderColor="none"
                  onChange={(e) => {
                    setValue("signInPassword", e.target.value);
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
