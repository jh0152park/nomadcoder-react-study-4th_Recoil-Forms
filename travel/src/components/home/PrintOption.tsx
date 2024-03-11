import { Text } from "@chakra-ui/react";

interface IPrintOption {
    code?: string;
    nation?: string;
    action?: string;
    actionCode?: string;
    stateIndex?: number;
}

export default function PrintOption({
    nation,
    code,
    stateIndex,
    action,
}: IPrintOption) {
    return (
        <Text
            fontWeight="bold"
            fontSize="15px"
            my="20px"
            _hover={{ cursor: "pointer", color: "blue.300" }}
            transition="all 0.1s linear"
        >
            {action}
        </Text>
    );
}
