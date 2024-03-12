export function isAlreadyExistNation(map: any, nation: string): boolean {
    return map.has(nation);
}

export function deleteNationState(map: any, nation: string): any {
    map.delete(nation);
    return map;
}

export function updateNationState(
    map: any,
    nation: string,
    state: number
): any {
    return map.set(nation, state);
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
