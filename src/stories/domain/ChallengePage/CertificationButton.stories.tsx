import CertificationButton from "@domain/ChallengePage/CertificationButton";

export default {
  title: "Domain/ChallengePage/CertificationButton",
  component: CertificationButton,
};

export const Default = () => {
  return (
    <>
      <CertificationButton></CertificationButton>
      <CertificationButton
        bgColor="#D9D9D9"
        name="check"
        color="#000000"
      ></CertificationButton>
    </>
  );
};
