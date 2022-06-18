import ChallengePage from "@pages/ChallengePage";
import GlobalStyles from "src/styles/GlobalStyles";
export default {
  title: "Pages/ChallengePage",
  compoenent: "ChallengePage",
};

export const Guest = () => {
  return (
    <>
      <GlobalStyles />
      <ChallengePage isGuestDummy={true}></ChallengePage>
    </>
  );
};

export const UserActive = () => {
  return (
    <>
      <GlobalStyles />
      <ChallengePage isGuestDummy={false} isActiveDummy={true}></ChallengePage>
    </>
  );
};

export const UserInActive = () => {
  return (
    <>
      <GlobalStyles />
      <ChallengePage isGuestDummy={false} isActiveDummy={false}></ChallengePage>
    </>
  );
};
