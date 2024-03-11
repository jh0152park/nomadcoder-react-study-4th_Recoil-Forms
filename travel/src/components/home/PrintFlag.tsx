import { VStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { NationList } from "../../global/projectCommon";

interface IPrintFlagProps {
    stateIndex: number;
}

export default function PrintFlag({ stateIndex }: IPrintFlagProps) {
    const nationList = useRecoilValue(NationList);

    return <VStack w="30%"></VStack>;
}
