/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";

import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Flex,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { User } from "src/types";

import Card from "@/base/Card";
import DefaultText from "@/base/DefaultText";

interface Props {
  followingList: User[];
  followerList: User[];
}

const FollowPageTab = ({ followingList, followerList }: Props) => {
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();

  const handleClickUser = (userId: string) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <TabsContainer>
      <Tabs isFitted variant="unstyled" align="center">
        <TabList height="40px">
          <CTab
            isSelectedTab={tabIndex === 0}
            borderTopRadius={15}
            fontSize="20px"
            onClick={() => setTabIndex(0)}
          >
            팔로워
          </CTab>
          <CTab
            isSelectedTab={tabIndex === 1}
            borderTopRadius={15}
            border="none"
            fontSize="20px"
            onClick={() => setTabIndex(1)}
          >
            팔로잉
          </CTab>
        </TabList>
        <TabPanels bgColor="white">
          <TabPanel>
            {followerList.length ? (
              <Flex flexDirection="column">
                {followerList.map((user) => (
                  <Card
                    type="user"
                    heading={user.fullName}
                    text={user.coverImage ?? "자기소개 없음"}
                    avatarSrc={user.image}
                    styleProps={{ boxShadow: "none" }}
                    onClick={() => {
                      handleClickUser(user._id);
                    }}
                    key={user._id}
                  ></Card>
                ))}
              </Flex>
            ) : (
              <DefaultText>아직 팔로워가 없어요!</DefaultText>
            )}
          </TabPanel>
          <TabPanel>
            {followingList.length ? (
              <Flex flexDirection="column">
                {followingList.map((user) => {
                  return (
                    <Card
                      type="user"
                      heading={user.fullName}
                      text={user.coverImage ?? "자기소개 없음"}
                      avatarSrc={user.image}
                      styleProps={{ boxShadow: "none" }}
                      onClick={() => {
                        handleClickUser(user._id);
                      }}
                      key={user._id}
                    ></Card>
                  );
                })}
              </Flex>
            ) : (
              <DefaultText>아직 팔로잉이 없어요!</DefaultText>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </TabsContainer>
  );
};

export default FollowPageTab;

const TabsContainer = styled.div`
  margin-top: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: none;
`;

const CTab = styled(Tab)<{ isSelectedTab: boolean }>`
  background-color: ${({ isSelectedTab }) =>
    isSelectedTab ? "#ffffff" : "#E2E8F0"};
  color: ${({ isSelectedTab }) => (isSelectedTab ? "#ff7900" : "#ffffff")};
  font-weight: ${({ isSelectedTab }) => (isSelectedTab ? "700" : "")};
`;
