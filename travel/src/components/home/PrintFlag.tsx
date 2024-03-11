import { Center, VStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { NationList, STATE_TITLE } from "../../global/projectCommon";
import Flag from "./Flag";

interface IPrintFlagProps {
    stateIndex: number;
}

export default function PrintFlag({ stateIndex }: IPrintFlagProps) {
    const nationList = useRecoilValue(NationList);

    return (
        <VStack
            w="30%"
            h="90vh"
            alignItems="center"
            justifyContent="flex-start"
            overflowY="scroll"
        >
            <Center fontSize="20px" fontWeight="bold" mb="30px">
                {STATE_TITLE[stateIndex]}
            </Center>
            {nationList[stateIndex].map((nation) => (
                <Flag
                    key={nation}
                    nation={nation.split(":")[0]}
                    code={nation.split(":")[1]}
                />
            ))}
        </VStack>
    );
}
