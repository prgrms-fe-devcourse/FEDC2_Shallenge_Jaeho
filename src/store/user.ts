import { User } from "src/types";
import { atom } from "jotai";

const userAtom = atom<User | null>(null);

export default userAtom;
