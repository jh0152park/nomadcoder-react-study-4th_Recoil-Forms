import { HStack, VStack } from "@chakra-ui/react";
import InputForm from "../components/home/InputForm";
import Flag from "../components/home/Flag";
import PrintFlag from "../components/home/PrintFlag";
import { STATE } from "../global/projectCommon";

export default function Home() {
    return (
        <VStack w="100%" h="100vh" py="30px" px="20px">
            <InputForm />
            <HStack
                w="100%"
                justifyContent="center"
                alignItems="flex-start"
                mt="50px"
            >
                <PrintFlag stateIndex={STATE.WANT} />
                <PrintFlag stateIndex={STATE.WENT} />
                <PrintFlag stateIndex={STATE.LIKE} />
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
