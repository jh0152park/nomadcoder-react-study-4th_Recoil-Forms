import { Center, VStack } from "@chakra-ui/react";
import { IntroText } from "../components/intro/IntroText";
import { Helmet } from "react-helmet";
import IntroButton from "../components/intro/IntroButton";

export default function Intro() {
    const comment =
        "Travel can expand our thoughts and experiences. Is there a country that stands out in your memory or a country you really want to visit? If you have a special memory, think about it again.";

    return (
        <Center w="100%" h="100vh">
            <Helmet>
                <title>Intro</title>
            </Helmet>
            <VStack>
                <IntroText words={comment} />
                <IntroButton words={comment} />
            </VStack>
        </Center>
    );
}
