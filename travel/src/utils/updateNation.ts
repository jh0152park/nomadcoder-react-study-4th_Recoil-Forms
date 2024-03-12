export function deleteNationState(obj: string, nation: string): any {
    let nationState = JSON.parse(obj);

    delete nationState[nation];
    return nationState;
}

export function updateNationState(
    obj: string,
    nation: string,
    state: number
): any {
    let nationState = JSON.parse(obj);

    nationState[nation] = state;
    return nationState;
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
