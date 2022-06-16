import { Box } from "@chakra-ui/react";

type CertificationBoxType = {
  isChecked: boolean;
};

const CertificationBox = ({ isChecked }: CertificationBoxType) => {
  const bgColor = isChecked ? "#FFAA6D" : "#EAEDF2";
  return <Box w="40px" h="40px" bg={bgColor} borderRadius="5px"></Box>;
};

export default CertificationBox;
