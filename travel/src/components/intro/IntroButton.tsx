import { Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IntroButton({ words }: { words: string }) {
    const navigate = useNavigate();
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const timeout = words.split(" ").length * 0.2;
        setTimeout(() => {
            setOpacity(1);
        }, timeout * 1000 + 2000);
    }, []);

    return (
        <Center
            opacity={opacity}
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
            onClick={() => navigate("/home")}
        >
            Let's explore your memory
        </Center>
    );
}
