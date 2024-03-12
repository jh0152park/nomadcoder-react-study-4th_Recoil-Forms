import { Text, useToast } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { deleteNation, isAlreadyExistNation } from "../../utils/updateNation";
import {
    LikeNationList,
    WantNationList,
    WentNationList,
} from "../../global/projectCommon";

interface IPrintOption {
    code: string;
    nation: string;
    action: string;
    actionCode: number;
    stateCode: number;
}

export default function PrintOption({
    code,
    nation,
    action,
    actionCode,
    stateCode,
}: IPrintOption) {
    const toast = useToast();
    const wantNationList = useRecoilState(WantNationList);
    const wentNationList = useRecoilState(WentNationList);
    const likeNationList = useRecoilState(LikeNationList);

    function updateNationState() {
        if (!isAlreadyExistNation(nation)) {
            toast({
                status: "error",
                title: "Something went wrong",
                description: `${nation} is looks like not included in nation list`,
            });
            return;
        }

        switch (actionCode) {
            // delete
            case 0:
                // const update = deleteNation(
                //     nationList[stateIndex],
                //     `${nation}:${code}`
                // );
                // console.log(update);
                break;

            // like
            case 1:
                break;

            // been
            case 2:
                break;

            // want
            case 3:
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
            onClick={updateNationState}
        >
            {action}
        </Text>
    );
}
