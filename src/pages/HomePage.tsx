import { Heading, Text, Flex } from "@chakra-ui/layout";
import Card from "@base/Card";
import { useNavigate } from "react-router-dom";
import { channelsList } from "@domain/HomePage/dummy";

const HomePage = () => {
  const navigate = useNavigate();
  const onClickMore = (channelId: string): void => {
    navigate(`challenges/${channelId}`);
  };
  const onClickChallange = (channelId: string, challangeId: string): void => {
    navigate(`challenges/${channelId}/${challangeId}`);
  };

  return (
    <>
      {channelsList.map((channel) => {
        const postList = channel.posts.slice(0, 2);
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
                  onClickMore(channel._id ?? "dummyChannel");
                }}
              >
                more{">"}
              </Text>
            </Flex>
            {postList.map((post) => {
              return (
                <Card
                  type="challange"
                  heading={post.title.ChallengeTitle}
                  text={post.title.reward}
                  commentCount={post.comments.length}
                  cheerCount={post.likes.length}
                  margin="16px 0"
                  onClick={() => {
                    onClickChallange(channel._id, post._id);
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
