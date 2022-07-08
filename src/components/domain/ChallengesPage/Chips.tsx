import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";

interface ChipsProps {
  names: string[];
  setChannelName: React.Dispatch<React.SetStateAction<string>>;
}

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

const Chip = styled(Button)`
  flex: 0 0 auto;
  font-size: 24px;
  background-color: white;
  color: #838489;
  margin: 0 8px;

  &:hover {
    color: white !important;
    background-color: #ffaa6d;
  }
  @media all and (max-width: 480px) {
    font-size: 18px;
  }
`;

const Chips = ({ names, setChannelName }: ChipsProps) => {
  const [selectedChannelIndex, setSelectedChannelIndex] = useState(0);
  console.log(window.innerWidth);

  return (
    <ChipsContainer>
      {names.length !== 0 &&
        names.map((name, index) => (
          <Chip
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
          </Chip>
        ))}
    </ChipsContainer>
  );
};

export default Chips;
