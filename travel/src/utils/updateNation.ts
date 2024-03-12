import { NationState } from "../global/projectCommon";

export function isAlreadyExistNation(nation: string): boolean {
    return NationState.has(nation);
}

export function deleteNationState(nation: string): void {
    NationState.delete(nation);
}

export function updateNationState(nation: string, state: number): void {
    NationState.set(nation, state);
}

export function deleteNationFromList(
    nationList: string[],
    nation: string
): string[] {
    return nationList.filter((n) => n !== nation);
}

export function addNationToList(
    nationList: string[],
    nation: string
): string[] {
    return [...nationList, nation];
}
