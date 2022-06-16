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
import { useState } from "react";

const TabsContainer = styled.div`
  margin-top: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 6px 0;
`;

const CInput = styled(Input)`
  width: calc(100% - 210px);
  margin-bottom: 24px;
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

const AuthForm = () => {
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
            <form style={{ padding: 0, marginTop: "136px" }}>
              <CInput
                type="email"
                placeholder="이메일을 입력하세요"
                focusBorderColor="none"
              />
              <CInput
                type="password"
                placeholder="비밀번호를 입력하세요"
                focusBorderColor="none"
              />
              <CButton>로그인</CButton>
            </form>
          </TabPanel>
          <TabPanel>
            <form style={{ marginTop: "64px" }}>
              <CInput
                type="email"
                placeholder="이메일을 입력하세요"
                focusBorderColor="none"
              />
              <CInput
                type="text"
                placeholder="닉네임을 입력하세요"
                focusBorderColor="none"
              />
              <CInput
                type="password"
                placeholder="비밀번호를 입력하세요"
                focusBorderColor="none"
              />
              <CInput
                type="password"
                placeholder="비밀번호 확인을 입력하세요"
                focusBorderColor="none"
              />
              <CButton>회원가입</CButton>
            </form>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </TabsContainer>
  );
};

export default AuthForm;
