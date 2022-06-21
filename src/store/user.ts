import { User } from "src/types";
import { atom } from "jotai";

const userAtom = atom(null as User);

export default userAtom;
