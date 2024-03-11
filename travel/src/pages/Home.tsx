import { VStack } from "@chakra-ui/react";
import InputForm from "../components/home/InputForm";
import Flag from "../components/home/Flag";

export default function Home() {
    return (
        <VStack w="100%" minH="100vh" my="30px">
            <InputForm />
            <Flag />
        </VStack>
    );
}
