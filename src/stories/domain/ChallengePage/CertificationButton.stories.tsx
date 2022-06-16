import CertificationButton from "@domain/ChallengePage/CertificationButton";

export default {
  title: "Domain/ChallengePage/CertificationButton",
  component: CertificationButton,
};

export const Default = () => {
  return (
    <>
      <CertificationButton isActive={true}></CertificationButton>
      <CertificationButton isActive={false}></CertificationButton>
    </>
  );
};
