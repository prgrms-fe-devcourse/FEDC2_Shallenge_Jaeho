import { useState } from "react";

import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface ChipsProps {
  names: string[];
  selectedChip: string;
  onClickProp: React.MouseEventHandler;
}

const ChipsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
  flex-wrap: wrap;
`;

const Chip = styled(Button)`
  flex: 0 0 auto;
  font-size: 24px;
  background-color: white;
  color: #838489;
  margin-bottom: 6px;

  &:hover {
    color: white !important;
    background-color: #ffaa6d;
  }
`;

const Chips = ({ names, selectedChip, onClickProp }: ChipsProps) => {
  return (
    <ChipsContainer>
      {names.length !== 0 &&
        names.map((name) => (
          <Chip
            key={name}
            data-description={name}
            style={{
              color: selectedChip === name ? "white" : "#838489",
              backgroundColor: selectedChip === name ? "#ff7900" : "",
            }}
            onClick={onClickProp}
          >
            {name}
          </Chip>
        ))}
    </ChipsContainer>
  );
};

export default Chips;
