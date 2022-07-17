/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRef, useState } from "react";

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
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { FormData } from "src/types";

interface Props {
  logInRegister: UseFormRegister<FormData>;
  signUpRegister: UseFormRegister<FormData>;
  watch: UseFormWatch<FormData>;
  onLogInSubmit: (
    e?: React.BaseSyntheticEvent<object, unknown, unknown> | undefined
  ) => Promise<void>;
  onSignUpSubmit: (
    e?: React.BaseSyntheticEvent<object, unknown, unknown> | undefined
  ) => Promise<void>;
}

const AuthForm = ({
  logInRegister,
  onLogInSubmit,
  onSignUpSubmit,
  signUpRegister,
  watch,
}: Props) => {
  const [tabIndex, setTabIndex] = useState(0);
  const password = useRef({});
  password.current = watch("signUpPassword", "");

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
                  type="text"
                  placeholder="이메일을 입력하세요"
                  focusBorderColor="none"
                  {...logInRegister("logInEmail", {
                    required: "필수 항목입니다!",
                  })}
                />
                <CInput
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  focusBorderColor="none"
                  {...logInRegister("logInPassword", {
                    required: "필수 항목입니다!",
                  })}
                />
                <Button
                  type="submit"
                  width={320}
                  height={68}
                  color="white"
                  backgroundColor="#ffaa6d"
                  fontSize={24}
                  fontWeight={600}
                  _hover={{ bg: "#ff7900" }}
                >
                  로그인
                </Button>
              </div>
            </Form>
          </TabPanel>
          <TabPanel>
            <Form onSubmit={onSignUpSubmit}>
              <div>
                <CInput
                  type="text"
                  placeholder="이메일을 입력하세요"
                  focusBorderColor="none"
                  {...signUpRegister("signUpEmail", {
                    required: "필수 항목입니다!",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                      message: "이메일 형식이 아닙니다.",
                    },
                  })}
                />
                <CInput
                  type="text"
                  placeholder="6자리 이하 닉네임을 입력하세요"
                  focusBorderColor="none"
                  {...signUpRegister("signUpFullName", {
                    required: "필수 항목입니다!",
                    maxLength: {
                      value: 6,
                      message: "닉네임이 6자리가 넘어요",
                    },
                  })}
                />
                <CInput
                  ref={password}
                  type="password"
                  placeholder="8자리 이상 비밀번호를 입력하세요"
                  focusBorderColor="none"
                  {...signUpRegister("signUpPassword", {
                    required: "필수 항목입니다!",
                    minLength: {
                      value: 8,
                      message: "비밀번호가 8자리가 넘어요",
                    },
                  })}
                />
                <CInput
                  type="password"
                  placeholder="비밀번호 확인을 입력하세요"
                  focusBorderColor="none"
                  {...signUpRegister("signUpPasswordRepeat", {
                    required: "필수 항목입니다!",
                    validate: (value) =>
                      value === password.current ||
                      "비밀번호가 일치하지 않습니다",
                  })}
                />
                <Button
                  type="submit"
                  width={320}
                  height={68}
                  color="white"
                  backgroundColor="#ffaa6d"
                  fontSize={24}
                  fontWeight={600}
                  _hover={{ bg: "#ff7900" }}
                >
                  회원가입
                </Button>
              </div>
            </Form>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </TabsContainer>
  );
};

export default AuthForm;

const TabsContainer = styled.div`
  margin-top: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 6px 0;
`;

const CTab = styled(Tab)<{ isSelectedTab: boolean }>`
  background-color: ${({ isSelectedTab }) =>
    isSelectedTab ? "#ffffff" : "#E2E8F0"};
  color: ${({ isSelectedTab }) => (isSelectedTab ? "#ff7900" : "#ffffff")};
  font-size: 24px;
  font-weight: ${({ isSelectedTab }) => (isSelectedTab ? "700" : "")};
`;

const CInput = styled(Input)`
  min-width: calc(100% - 210px);
  width: 320px;
  margin-bottom: 24px;
  border-color: var(--chakra-colors-gray-300);

  &:focus {
    border-color: #ff7900;
  }
`;

const Form = styled.form`
  height: 388px;
  display: flex;
  align-items: center;
`;
