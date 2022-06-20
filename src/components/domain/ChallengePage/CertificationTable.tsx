import { Grid, GridItem } from "@chakra-ui/react";
import CertificationBox from "@domain/ChallengePage/CertificationBox";

type CertificationBoxType = {
  day: number;
  isChecked: boolean;
};

type CertificationTableType = {
  days: Array<CertificationBoxType>;
};

const CertificationTable = ({ days }: CertificationTableType) => {
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
