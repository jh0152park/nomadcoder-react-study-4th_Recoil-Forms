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

interface IModalProsp {
    isOpen: boolean;
    onClose: () => void;
    nation: string;
    code: string;
}

export default function DetailModal({
    isOpen,
    onClose,
    nation,
    code,
}: IModalProsp) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <h1>Delete</h1>
                    <h1>Move To somewhere</h1>
                    <h1>Move To somewhere</h1>
                    <h1>Move To somewhere</h1>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
