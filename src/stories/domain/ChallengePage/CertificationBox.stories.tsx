import CertificationBox from "@domain/ChallengePage/CertificationBox";

export default {
  title: "Domain/ChallengePage/CertificationBox",
  component: CertificationBox,
};

export const isCheckedTrue = () => {
  return <CertificationBox isChecked={true}></CertificationBox>;
};

export const isCheckedFalse = () => {
  return <CertificationBox isChecked={false}></CertificationBox>;
};
