import { atom } from "jotai";
import { User } from "src/types";

const userAtom = atom(null as User);

export default userAtom;
