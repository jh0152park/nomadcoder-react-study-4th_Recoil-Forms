import { NationState } from "../global/projectCommon";

export function isAlreadyExistNation(nation: string): boolean {
    return NationState.has(nation);
}

export function deleteNation(nationList: string[], nation: string): string[] {
    const country = nation.split(":")[0];

    NationState.delete(country);
    return nationList.filter((n) => n !== nation);
}
