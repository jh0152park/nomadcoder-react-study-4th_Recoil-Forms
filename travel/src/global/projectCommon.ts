import { atom } from "recoil";

export enum STATE {
    WANT = 0,
    WENT,
    LIKE,
}

export const STATE_TITLE: { [key: number]: string } = {
    0: "Countries I want to go to",
    1: "Countries I've been to",
    2: "Countries I like",
};

export const NationList = atom<string[][]>({
    key: "NationList",
    default: [[], [], []],
});
