import { useState, useEffect } from "react";

import { Heading, Text, Flex } from "@chakra-ui/layout";
import { useNavigate } from "react-router-dom";

import { Channel, Post } from "../types/index";
import Card from "@/base/Card";
import useGetChannelList from "@/hooks/quries/useGetChannelList";
import useGetPostLists from "@/hooks/quries/useGetPostLists";

const HomePage = () => {
  const navigate = useNavigate();
  const onClickMore = (channelId: string) => {
    navigate(`/challenges`);
  };
  const onClickChallenge = (channelId: string, challengeId: string): void => {
    navigate(`/challenges/${channelId}/${challengeId}`);
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
                  onClickMore(channel._id);
                }}
              >
                more{">"}
              </Text>
            </Flex>
            {postList.map((post) => {
              post.title = post.title.replaceAll("'", '"');
              const challenge = JSON.parse(post.title);
              return (
                <Card
                  type="challenge"
                  heading={challenge.challengeTitle}
                  text={challenge.reward}
                  commentCount={post.comments.length}
                  cheerCount={post.likes.length}
                  avatarSrc={post.author.image}
                  margin="16px 0"
                  onClick={() => {
                    onClickChallenge(post.channel._id, post._id);
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
