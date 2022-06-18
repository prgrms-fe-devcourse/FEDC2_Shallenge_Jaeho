import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface ChipsProps {
  names: string[];
  setChannelName: React.Dispatch<React.SetStateAction<string>>;
}

const ChipsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const Chip = styled(Button)`
  flex: 0 0 auto;
  font-size: 24px;
  background-color: white;
  color: #838489;

  &:hover {
    color: white;
    background-color: #ffaa6d;
  }
`;

const Chips = ({ names, setChannelName }: ChipsProps) => {
  return (
    <ChipsContainer>
      {names.map((name) => (
        <Chip key={name} onClick={() => setChannelName(name)}>
          {name}
        </Chip>
      ))}
    </ChipsContainer>
  );
};

export default Chips;
