import { Center, VStack } from "@chakra-ui/react";
import Flag from "./Flag";

interface IPrintFlagProps {
    title: string;
    stateCode: number;
    nationList: string[];
}

export default function PrintFlag({
    title,
    stateCode,
    nationList,
}: IPrintFlagProps) {
    return (
        <VStack
            w="30%"
            minH="100vh"
            alignItems="center"
            justifyContent="flex-start"
        >
            <Center fontSize="20px" fontWeight="bold" mb="30px">
                {title}
            </Center>
            {nationList.map((nation) => (
                <Flag
                    key={nation}
                    stateCode={stateCode}
                    nation={nation.split(":")[0]}
                    code={nation.split(":")[1]}
                />
            ))}
        </VStack>
    );
}
