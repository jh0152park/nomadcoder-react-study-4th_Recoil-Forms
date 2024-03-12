import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import PrintOption from "./PrintOption";

interface IModalProsp {
    isOpen: boolean;
    onClose: () => void;
    nation: string;
    code: string;
    stateCode: number;
}

interface IAction {
    [key: string]: string;
}

const Actions: IAction = {
    delete: "Delete nation 🗑️",
    like: "Move to list of like nation 🥰",
    been: "Move to list of have been nation 🛬",
    want: "Move to list of wanna go to nation 🏖️",
};

export default function DetailModal({
    isOpen,
    onClose,
    nation,
    code,
    stateCode,
}: IModalProsp) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="lg"
            isCentered
            motionPreset="slideInBottom"
        >
            <ModalOverlay />
            <ModalContent bgColor="#121212">
                <ModalHeader fontSize="30px" fontWeight="bold">
                    {nation}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {Object.keys(Actions).map((action, i) => (
                        <PrintOption
                            key={action}
                            code={code}
                            nation={nation}
                            actionCode={i}
                            stateCode={stateCode}
                            action={Actions[action]}
                        />
                    ))}
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" onClick={onClose} w="100%">
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
