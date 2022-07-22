import { Spinner } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Loading = () => {
  return (
    <Wrapper>
      <Spinner size="xl" />
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
