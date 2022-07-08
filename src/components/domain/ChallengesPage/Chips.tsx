import { background, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";

interface Props {
  names: string[];
  setChannelName: React.Dispatch<React.SetStateAction<string>>;
}

const Chips = ({ names, setChannelName }: Props) => {
  const [selectedChannelIndex, setSelectedChannelIndex] = useState(0);
  return (
    <ChipsContainer>
      {names.length !== 0 &&
        names.map((name, index) => (
          <Button
            flex="0 0 auto"
            fontSize={{ base: "18px", sm: "24px" }}
            backgroundColor="white"
            color="#838489"
            margin="0 8px"
            _hover={{ color: "#ffffff", backgroundColor: "#ffaa6d" }}
            key={name}
            onClick={() => {
              setChannelName(name);
              setSelectedChannelIndex(index);
            }}
            style={{
              color: selectedChannelIndex === index ? "white" : "#838489",
              backgroundColor: selectedChannelIndex === index ? "#ff7900" : "",
            }}
          >
            {name}
          </Button>
        ))}
    </ChipsContainer>
  );
};

export default Chips;

const ChipsContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media all and (max-width: 640px) {
    width: calc(100vw - 30px);
  }
`;
