import React from "react";
import { useAtom } from "jotai";
import userAtom from "../store/user";
import usePageTitle from "@hooks/usePageTitle";

const MyProfilePage = () => {
  const [myUser] = useAtom(userAtom);
  usePageTitle(myUser.fullName);
  return <div>{myUser?._id}</div>;
};

export default MyProfilePage;
