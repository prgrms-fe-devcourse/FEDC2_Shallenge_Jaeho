import GlobalStyles from "src/styles/GlobalStyles";

import CreateChallengePage from "@/pages/CreateChallengePage";
export default {
  title: "Pages/CreateChallengePage",
  compoenent: "CreateChallengePage",
};

export const Default = () => {
  return (
    <>
      <GlobalStyles />
      <CreateChallengePage></CreateChallengePage>
    </>
  );
};
