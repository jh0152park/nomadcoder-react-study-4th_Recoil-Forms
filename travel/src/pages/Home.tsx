import { HStack, VStack } from "@chakra-ui/react";
import InputForm from "../components/home/InputForm";
import PrintFlag from "../components/home/PrintFlag";
import { useRecoilValue } from "recoil";
import {
    LikeNationList,
    STATE_CODE,
    WantNationList,
    WentNationList,
} from "../global/projectCommon";

export default function Home() {
    const wantNationList = useRecoilValue(WantNationList);
    const wentNationList = useRecoilValue(WentNationList);
    const likeNationList = useRecoilValue(LikeNationList);

    return (
        <VStack w="100%" h="100vh" py="30px" px="20px">
            <InputForm />
            <HStack
                w="100%"
                justifyContent="center"
                alignItems="flex-start"
                mt="50px"
            >
                <PrintFlag
                    nationList={wantNationList}
                    stateCode={STATE_CODE.WANT}
                    title="I wanna go there!"
                />
                <PrintFlag
                    nationList={wentNationList}
                    stateCode={STATE_CODE.WENT}
                    title="I've been there!"
                />
                <PrintFlag
                    nationList={likeNationList}
                    stateCode={STATE_CODE.LIKE}
                    title="I like there!"
                />
            </HStack>
        </VStack>
    );
}

// Ghana: "GH",
// Gabon: "GA",
// Russia: "RU",
// Vatican: "VA",
// Bulgaria: "BG",
// Brazil: "BR",
