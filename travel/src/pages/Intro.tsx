import { Center, VStack } from "@chakra-ui/react";
import { IntroText } from "../components/intro/IntroText";
import { Helmet } from "react-helmet";

export default function Intro() {
    return (
        <Center w="100%" h="100vh">
            <Helmet>
                <title>Intro</title>
            </Helmet>
            <VStack>
                <IntroText words="Travel can expand our thoughts and experiences. Is there a country that stands out in your memory or a country you really want to visit? If you have a special memory, think about it again." />
                <Center
                    mt="30px"
                    fontSize="25px"
                    fontWeight="bold"
                    px="20px"
                    py="15px"
                    bgColor="black"
                    borderRadius="30px"
                    _hover={{
                        cursor: "pointer",
                        color: "black",
                        bgColor: "white",
                    }}
                    transition="all 0.3s linear"
                >
                    Let's explore your memory
                </Center>
            </VStack>
        </Center>
    );
}
