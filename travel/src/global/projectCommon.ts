import { atom } from "recoil";

interface IStateTitle {
    [key: number]: string;
}

export interface INationState {
    [key: string]: number;
}

export enum STATE {
    WANT = 0,
    WENT,
    LIKE,
}

export const STATE_TITLE: IStateTitle = {
    0: "Countries I want to go to",
    1: "Countries I've been to",
    2: "Countries I like",
};

export const NationList = atom<string[][]>({
    key: "NationList",
    default: [[], [], []],
});

export let NationState = new Map();
