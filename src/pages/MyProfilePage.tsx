import React from "react";
import { useAtom } from "jotai";
import userAtom from "../store/user";

const MyProfilePage = () => {
  const [myUser] = useAtom(userAtom);
  return <div>{myUser?._id}</div>;
};

export default MyProfilePage;
