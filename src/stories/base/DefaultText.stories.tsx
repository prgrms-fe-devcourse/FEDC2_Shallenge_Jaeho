import { Box } from "@chakra-ui/react";

import DefaultText from "@/base/DefaultText";
export default {
  title: "Component/Base/DefaultText",
  component: DefaultText,
};

export const NotificationPageText = () => {
  return (
    <DefaultText>
      알람이 아직 안 왔어요!
      <br />
      먼저 다가가 보시는 건 어떠신가요?😊
    </DefaultText>
  );
};

export const SearchPageText = () => {
  return (
    <DefaultText>
      <Box
        padding="2px"
        display="inline-block"
        backgroundColor="#e4e4e4"
        borderRadius="4px"
      >
        {"@김땡땡"}
      </Box>
      으로 찾은 사용자가 없어요 😢
      <br />
      다른 이름으로 찾아보시는 건 어떠신가요?
    </DefaultText>
  );
};

export const NotFoundPageText = () => {
  return <DefaultText>페이지를 찾을 수 없습니다..😢</DefaultText>;
};
