import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface Props {
  names: string[];
  selectedChip: string;
  onClickProp: React.MouseEventHandler;
}

const Chips = ({ names, selectedChip, onClickProp }: Props) => {
  return (
    <ChipsContainer>
      {names.length !== 0 &&
        names.map((name) => (
          <Button
            flex="0 0 auto"
            fontSize={{ base: "18px", sm: "24px" }}
            backgroundColor="white"
            color="#838489"
            margin="0 8px"
            _hover={{ color: "#ffffff", backgroundColor: "#ffaa6d" }}
            key={name}
            data-description={name}
            style={{
              color: selectedChip === name ? "white" : "#838489",
              backgroundColor: selectedChip === name ? "#ff7900" : "",
            }}
            onClick={onClickProp}
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
