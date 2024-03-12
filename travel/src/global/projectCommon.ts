import { atom } from "recoil";

export enum STATE_CODE {
    WANT = 0,
    WENT,
    LIKE,
}

export const WantNationList = atom<string[]>({
    key: "WantNationList",
    default: [],
});

export const WentNationList = atom<string[]>({
    key: "WentNationList",
    default: [],
});

export const LikeNationList = atom<string[]>({
    key: "LikeNationList",
    default: [],
});

export const NationState = atom<any>({
    key: "NationState",
    default: new Map(),
});

// export let NationState = new Map();
