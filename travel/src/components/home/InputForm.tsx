import { FieldValues, useForm } from "react-hook-form";
import { Center, Input, useToast } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { getFlagCode, isCorrectNation } from "../../global/nation";
import { useSetRecoilState } from "recoil";
import { NationList, STATE } from "../../global/projectCommon";

interface INation {
    nation: string;
    error?: string;
}

export default function InputForm() {
    const toast = useToast();
    const setNationState = useSetRecoilState(NationList);
    const { reset, register, handleSubmit } = useForm<INation>();

    function onSubmit({ nation }: FieldValues) {
        if (nation === "") {
            toast({
                status: "error",
                title: "Nation is required",
                description: "Please enter nation exactly",
            });
            reset();
            return;
        }

        if (!isCorrectNation(nation)) {
            toast({
                status: "error",
                title: `${nation} is not a correct`,
                description:
                    "Please enter nation exactly in english like a 'India'",
            });
            reset();
            return;
        }

        const code = getFlagCode(nation);
        // console.log(`${nation}:${code}`);
        // setNationState((prev) => [
        //     [...prev[STATE.WANT], `${nation}:${code}`],
        //     [...prev[STATE.WENT]],
        //     [...prev[STATE.LIKE]],
        // ]);
    }

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Center as="form" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    px="20px"
                    py="15px"
                    w="700px"
                    h="60px"
                    border="none"
                    focusBorderColor="gray.400"
                    borderRadius="40px"
                    color="whitesmoke"
                    fontSize="20px"
                    placeholder="Enter the nation where you like to"
                    _placeholder={{
                        textAlign: "center",
                        color: "whitesmoke",
                        opacity: 0.5,
                    }}
                    {...register("nation")}
                />
            </Center>
        </>
    );
}