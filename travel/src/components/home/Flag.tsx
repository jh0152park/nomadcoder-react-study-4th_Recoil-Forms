import { Center, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

interface IFlagProps {
    nation: string;
    code: string;
}

export default function Flag({ nation, code }: IFlagProps) {
    const [opacity, setOpacity] = useState(false);

    function toggleOpacity() {
        setOpacity((prev) => !prev);
    }

    return (
        <Center
            w="300px"
            h="180px"
            overflow="hidden"
            borderRadius="15px"
            position="relative"
        >
            <Image
                w="100%"
                h="100%"
                src="resources/flags/AD.gif"
                borderRadius="15px"
                _hover={{
                    cursor: "pointer",
                    bgColor: "black",
                    opacity: 0.5,
                    transform: "scale(1.15)",
                }}
                transition="all 0.1s linear"
                onMouseOver={toggleOpacity}
                onMouseLeave={toggleOpacity}
            />
            <Text
                position="absolute"
                fontWeight="bold"
                fontSize="20px"
                opacity={opacity ? 1 : 0}
            >
                Nation
            </Text>
        </Center>
    );
}