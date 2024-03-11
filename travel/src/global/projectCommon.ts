import { atom } from "recoil";

export enum STATE {
    WANT = 0,
    WENT,
    LIKE,
}

export const NationList = atom<string[][]>({
    key: "NationList",
    default: [[], [], []],
});
