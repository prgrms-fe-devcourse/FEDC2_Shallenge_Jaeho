import CreateChallengePage from "@/pages/CreateChallengePage";
import GlobalStyles from "src/styles/GlobalStyles";
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
