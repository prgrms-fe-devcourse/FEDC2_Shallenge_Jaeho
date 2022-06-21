import { Heading, Text, Flex } from "@chakra-ui/layout";
import Card from "@base/Card";
import { useNavigate } from "react-router-dom";
import useGetChannelList from "@hooks/quries/useGetChannelList";
import useGetPostLists from "@hooks/quries/useGetPostLists";
import { useState, useEffect } from "react";
import { Channel, Post } from "../types/index";

const HomePage = () => {
  const navigate = useNavigate();
  const onClickMore = () => {
    navigate(`challenges/`);
  };
  const onClickChallange = (challengeId: string): void => {
    navigate(`challenge/${challengeId}`);
  };

  const [channelsList, setChannelsList] = useState<Channel[]>([]);
  const [postLists, setPostLists] = useState<Array<Post[]>>([]);

  const { data } = useGetChannelList();

  useEffect(() => {
    if (data) {
      setChannelsList(data.data as Array<Channel>);
    }
  }, [data]);

  const { data: res } = useGetPostLists(
    channelsList.map((channel: Channel) => channel._id)
  );

  useEffect(() => {
    if (res) {
      console.log(res);
      setPostLists(res.map((r) => r.data));
    }
  }, [res]);

  return (
    <>
      {channelsList.map((channel) => {
        const postList = postLists
          .filter((list) => channel._id === list[0].channel._id)
          .flat()
          .slice(0, 2);
        return (
          <Flex flexDirection="column" key={channel._id}>
            <Flex
              paddingTop="48px"
              justifyContent="space-between"
              key={channel._id}
            >
              <Heading size="xl">{channel.name}</Heading>
              <Text
                size="sm"
                color="#ff7900"
                alignSelf={"end"}
                _hover={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  onClickMore();
                }}
              >
                more{">"}
              </Text>
            </Flex>
            {postList.map((post) => {
              post.title = post.title.replaceAll("'", '"');
              const challange = JSON.parse(post.title);
              return (
                <Card
                  type="challange"
                  heading={challange.challengeTitle}
                  text={challange.reward}
                  commentCount={post.comments.length}
                  cheerCount={post.likes.length}
                  margin="16px 0"
                  onClick={() => {
                    onClickChallange(post._id);
                  }}
                  key={post._id}
                ></Card>
              );
            })}
          </Flex>
        );
      })}
    </>
  );
};

export default HomePage;
