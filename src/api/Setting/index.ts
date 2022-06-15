import axios from "../../lib/axios";

export const fetchPutUpdateMyInfo = (fullName: string, username: string) =>
  axios.put("/settings/update-user", {
    data: { fullName, username },
  });

export const fetchPutUpdatedPassword = (password: string) =>
  axios.put("/settings/update-password", {
    data: { password },
  });
