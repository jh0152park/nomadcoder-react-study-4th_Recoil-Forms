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
    const [wantNationList, setWantNationList] = useRecoilState(WantNationList);
    const [wentNationList, setWentNationList] = useRecoilState(WentNationList);
    const [likeNationList, setLikeNationList] = useRecoilState(LikeNationList);
    const nationList =
        stateCode === 0
            ? wantNationList
            : stateCode === 1
            ? wentNationList
            : likeNationList;

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
                const update = deleteNation(nationList, `${nation}:${code}`);

                if (stateCode === 0) setWantNationList(update);
                else if (stateCode === 1) setWentNationList(update);
                else setLikeNationList(update);

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
