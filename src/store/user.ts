import { atom } from "jotai";

import { User } from "@/types/index";

const userAtom = atom(null as User);

export default userAtom;
