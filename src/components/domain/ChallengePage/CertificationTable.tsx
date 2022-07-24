import { Grid, GridItem } from "@chakra-ui/react";

import CertificationBox from "@/domain/ChallengePage/CertificationBox";

type CertificationBoxType = {
  day: number;
  isChecked: boolean;
};

interface Props {
  children: Array<CertificationBoxType>;
}

const CertificationTable = ({ children: days }: Props) => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gridGap="20px" w="340px">
      {days.length === 30 &&
        days.map((d) => (
          <GridItem key={d.day}>
            <CertificationBox isChecked={d.isChecked}></CertificationBox>
          </GridItem>
        ))}
    </Grid>
  );
};

export default CertificationTable;
