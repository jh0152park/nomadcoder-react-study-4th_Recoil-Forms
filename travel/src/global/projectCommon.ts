import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "persist-atom-key",
    storage: localStorage,
});

export interface INationState {
    [key: string]: number;
}

export enum STATE_CODE {
    WANT = 0,
    WENT,
    LIKE,
}

export const WantNationList = atom<string[]>({
    key: "WantNationList",
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const WentNationList = atom<string[]>({
    key: "WentNationList",
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const LikeNationList = atom<string[]>({
    key: "LikeNationList",
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const NationState = atom<INationState>({
    key: "NationState",
    default: {},
    effects_UNSTABLE: [persistAtom],
});
