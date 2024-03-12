import { Text, useToast } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import {
    addNationToList,
    deleteNationFromList,
    deleteNationState,
    isAlreadyExistNation,
    updateNationState,
} from "../../utils/updateNation";
import {
    LikeNationList,
    WantNationList,
    WentNationList,
} from "../../global/projectCommon";

interface IPrintOption {
    code: string;
    nation: string;
    action: string;
    stateCode: number;
    actionCode: number;
    onClose: () => void;
}

export default function PrintOption({
    code,
    nation,
    action,
    actionCode,
    stateCode,
    onClose,
}: IPrintOption) {
    const toast = useToast();
    const [wantNationList, setWantNationList] = useRecoilState(WantNationList);
    const [wentNationList, setWentNationList] = useRecoilState(WentNationList);
    const [likeNationList, setLikeNationList] = useRecoilState(LikeNationList);

    const toBeDeleteNationList =
        stateCode === 0
            ? wantNationList
            : stateCode === 1
            ? wentNationList
            : likeNationList;

    const toBeUpdateNationList =
        actionCode - 1 === 0
            ? wantNationList
            : actionCode - 1 === 1
            ? wentNationList
            : likeNationList;

    function updateNationListState(updateList: string[], state: number) {
        if (state === 0) {
            setWantNationList(updateList);
        } else if (state === 1) {
            setWentNationList(updateList);
        } else if (state === 2) {
            setLikeNationList(updateList);
        }
    }

    function updateNation() {
        if (!isAlreadyExistNation(nation)) {
            toast({
                status: "error",
                title: "Something went wrong",
                description: `${nation} is looks like not included in nation list`,
            });
            return;
        }

        const deletedList = deleteNationFromList(
            toBeDeleteNationList,
            `${nation}:${code}`
        );

        switch (actionCode) {
            case 0: // delete
                deleteNationState(nation);
                updateNationListState(deletedList, stateCode);
                break;
            case 1: // want
            case 2: // been
            case 3: // like
                if (actionCode - 1 === stateCode) {
                    toast({
                        status: "info",
                        title: `${nation} already there!`,
                    });
                    onClose();
                    return;
                }

                const addedList = addNationToList(
                    toBeUpdateNationList,
                    `${nation}:${code}`
                );
                updateNationListState(deletedList, stateCode);
                updateNationListState(addedList, actionCode - 1);
                updateNationState(nation, actionCode - 1);
                break;
        }
    }

    return (
        <Text
            fontWeight="bold"
            fontSize="15px"
            my="20px"
            _hover={{ cursor: "pointer", color: "blue.300" }}
            transition="all 0.1s linear"
            onClick={updateNation}
        >
            {action}
        </Text>
    );
}
