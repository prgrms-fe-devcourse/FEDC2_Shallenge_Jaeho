import { Box } from "@chakra-ui/react";

interface Props {
  isChecked: boolean;
}

const CertificationBox = ({ isChecked }: Props) => {
  const bgColor = isChecked ? "#FFAA6D" : "#EAEDF2";
  return <Box w="40px" h="40px" bg={bgColor} borderRadius="5px"></Box>;
};

export default CertificationBox;
