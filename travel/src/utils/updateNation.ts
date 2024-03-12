import { NationState } from "../global/projectCommon";

export function isAlreadyExistNation(nation: string): boolean {
    return NationState.has(nation);
}

export function deleteNation(nationList: string[], nation: string): string[] {
    return nationList.filter((n) => n !== nation);
}
