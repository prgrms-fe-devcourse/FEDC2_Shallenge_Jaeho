import { Suspense } from "react";

import { Heading, Text, Flex } from "@chakra-ui/layout";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { fetchGetPostListByChannel } from "@/api/post";
import Card from "@/base/Card";

import { Channel } from "../../../types/index";

interface Props {
  channel: Channel;
}

const PostList = ({ channel }: Props) => {
  const navigate = useNavigate();

  const onClickMore = (channelId: string) => {
    navigate(`/challenges/${channelId}`);
  };

  const onClickChallenge = (channelId: string, challengeId: string): void => {
    navigate(`/challenges/${channelId}/${challengeId}`);
  };

  const { data: postList, isLoading } = useQuery(
    [`${channel._id}postList`],
    () => fetchGetPostListByChannel(channel._id)
  );

  if (isLoading) {
    return <></>;
  }

  return (
    <Flex flexDirection="column" key={channel._id}>
      <Flex paddingTop="48px" justifyContent="space-between" key={channel._id}>
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
      {postList.slice(0, 2).map((post) => {
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
            author={post.author.fullName}
            onClick={() => {
              onClickChallenge(post.channel._id, post._id);
            }}
            key={post._id}
          ></Card>
        );
      })}
    </Flex>
  );
};

export default PostList;
