/* eslint-disable @typescript-eslint/no-misused-promises */
import { useNavigate } from "react-router-dom";
import { User } from "src/types";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Flex,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";
import Card from "@base/Card";
import DefaultText from "@base/DefaultText";

interface Props {
  followingList: User[];
  followerList: User[];
}

const FollowPageTab = ({ followingList, followerList }: Props) => {
  console.log("팔로잉", followingList);
  console.log("파로워", followerList);
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();

  const handleClickUser = (userId: string) => {
    navigate(`/profile/${userId}`);
  };

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
            팔로워
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
            팔로잉
          </Tab>
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
  border: none;
  border-radius: 6px 0;
`;
