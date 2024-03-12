import { Center, Image, Text, useDisclosure } from "@chakra-ui/react";
import DetailModal from "./DetailModal";

interface IFlagProps {
    nation: string;
    code: string;
    stateCode: number;
}

export default function Flag({ nation, code, stateCode }: IFlagProps) {
    const flagClick = useDisclosure();

    return (
        <Center
            w="300px"
            h="180px"
            overflow="hidden"
            borderRadius="15px"
            mb="10px"
            position="relative"
            onClick={() => flagClick.onOpen()}
        >
            <Image
                w="100%"
                h="100%"
                src={`resources/flags/${code}.gif`}
                borderRadius="15px"
                _hover={{
                    cursor: "pointer",
                    bgColor: "black",
                    opacity: 0.5,
                    transform: "scale(1.2)",
                }}
                transition="all 0.2s linear"
                position="absolute"
            />
            <Text fontWeight="bold" fontSize="20px">
                {nation}
            </Text>
            <DetailModal
                code={code}
                nation={nation}
                stateCode={stateCode}
                isOpen={flagClick.isOpen}
                onClose={flagClick.onClose}
            />
        </Center>
    );
}
