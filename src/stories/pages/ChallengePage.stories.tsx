import GlobalStyles from "src/styles/GlobalStyles";

import ChallengePage from "@/pages/ChallengePage";
export default {
  title: "Pages/ChallengePage",
  compoenent: "ChallengePage",
};

export const Guest = () => {
  return (
    <>
      <GlobalStyles />
      {/* <ChallengePage isGuestDummy={true}></ChallengePage> */}
    </>
  );
};

export const User = () => {
  return (
    <>
      <GlobalStyles />
      {/* <ChallengePage isGuestDummy={false}></ChallengePage> */}
    </>
  );
};
