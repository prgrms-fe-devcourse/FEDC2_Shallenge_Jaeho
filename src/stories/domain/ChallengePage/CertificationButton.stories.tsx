import CertificationButton from "@domain/ChallengePage/CertificationButton";

export default {
  title: "Domain/ChallengePage/CertificationButton",
  component: CertificationButton,
};

export const Active = () => {
  return <CertificationButton isActive={true}></CertificationButton>;
};

export const UnActive = () => {
  return <CertificationButton isActive={false}></CertificationButton>;
};
