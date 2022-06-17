import { Heading, Text, Flex } from "@chakra-ui/layout";
import Card from "@base/Card";
import { useNavigate } from "react-router-dom";
import { Channel } from "src/types";

export const channelsList: Channel[] = [
  {
    authRequired: false, // 사용되지 않음
    posts: [],
    _id: "channelid1", // 채널 id
    name: "💪운동",
    description: "운동",
    createdAt: "2022-06-07T09:44:19.128Z",
    updatedAt: "2022-06-07T09:44:19.128Z",
  },
  {
    authRequired: false, // 사용되지 않음
    posts: [],
    _id: "channelid2", // 채널 id
    name: "📘독서",
    description: "독서",
    createdAt: "2022-06-07T09:44:19.128Z",
    updatedAt: "2022-06-07T09:44:19.128Z",
  },
  {
    authRequired: false, // 사용되지 않음
    posts: [],
    _id: "channelid3", // 채널 id
    name: "✍️자기계발",
    description: "자기계발",
    createdAt: "2022-06-07T09:44:19.128Z",
    updatedAt: "2022-06-07T09:44:19.128Z",
  },
  {
    authRequired: false, // 사용되지 않음
    posts: [],
    _id: "channelid4", // 채널 id
    name: "⏱️루틴",
    description: "루틴",
    createdAt: "2022-06-07T09:44:19.128Z",
    updatedAt: "2022-06-07T09:44:19.128Z",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const onClickMore = (channelId: string): void => {
    navigate(`challenge/${channelId}`);
  };
  const onClickChallange = (channelId: string, challangeId: string): void => {
    navigate(`challenge/${channelId}/${challangeId}`);
  };

  return (
    <>
      <Flex paddingTop="48px" justifyContent="space-between">
        <Heading size="xl">💪운동</Heading>
        <Text
          size="sm"
          color="#ff7900"
          alignSelf={"end"}
          _hover={{
            cursor: "pointer",
          }}
          onClick={() => {
            onClickMore("dummyChannelId");
          }}
        >
          more{">"}
        </Text>
      </Flex>
      {channelsList.slice(0, 2).map((challange) => {
        return (
          <Card
            type="challange"
            heading="헬스장에서 30분 이상 운동"
            text="가지고 싶었던 운동화 구입"
            commentCount={12}
            cheerCount={23}
            margin="16px 0"
            onClick={() => {
              onClickChallange("dummyChannel", "dummyChallange");
            }}
          ></Card>
        );
      })}
      {channelsList.map((channel) => {
        const postList = channel.posts.slice(0, 2);
        return (
          <Flex paddingTop="48px" justifyContent="space-between">
            <Heading size="xl">{channel.name}</Heading>
            <Text
              size="sm"
              color="#ff7900"
              alignSelf={"end"}
              _hover={{
                cursor: "pointer",
              }}
              onClick={() => {
                onClickMore(channel._id);
              }}
            >
              more{">"}
            </Text>
          </Flex>
        );
      })}
    </>
  );
};

export default HomePage;
