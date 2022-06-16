import Social from "../components/base/Social";
import { Flex } from "@chakra-ui/react";
export default {
  title: "Component/Base/Social",
  component: "Social",
};

export const Cheer = () => {
  return <Social type="cheer" count={24}></Social>;
};

export const Comment = () => {
  return <Social type="comment" count={3}></Social>;
};

export const SideSocial = () => {
  return (
    <Flex>
      <Social type="comment" count={3} size="side"></Social>
      <Social type="cheer" count={3} size="side"></Social>
    </Flex>
  );
};
