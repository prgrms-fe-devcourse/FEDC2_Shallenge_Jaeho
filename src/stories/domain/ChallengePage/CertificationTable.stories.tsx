import CertificationTable from "@domain/ChallengePage/CertificationTable";

const dummyData = [
  { day: 1, isChecked: true },
  { day: 2, isChecked: true },
  { day: 3, isChecked: false },
  { day: 4, isChecked: true },
  { day: 5, isChecked: false },
  { day: 6, isChecked: false },
  { day: 7, isChecked: true },
  { day: 8, isChecked: true },
  { day: 9, isChecked: false },
  { day: 10, isChecked: false },
  { day: 11, isChecked: true },
  { day: 12, isChecked: true },
  { day: 13, isChecked: true },
  { day: 14, isChecked: false },
  { day: 15, isChecked: true },
  { day: 16, isChecked: true },
  { day: 17, isChecked: true },
  { day: 18, isChecked: true },
  { day: 19, isChecked: true },
  { day: 20, isChecked: false },
  { day: 21, isChecked: false },
  { day: 22, isChecked: true },
  { day: 23, isChecked: false },
  { day: 24, isChecked: true },
  { day: 25, isChecked: false },
  { day: 26, isChecked: false },
  { day: 27, isChecked: true },
  { day: 28, isChecked: true },
  { day: 29, isChecked: false },
  { day: 30, isChecked: false },
];

export default {
  title: "Domain/ChallengePage/CertificationTable",
  component: CertificationTable,
};

export const isCheckedTrue = () => {
  return <CertificationTable days={dummyData}></CertificationTable>;
};
