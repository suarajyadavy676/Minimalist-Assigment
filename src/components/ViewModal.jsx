import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  useDisclosure
} from '@chakra-ui/react'

function ViewModal({value}) {
  const {change} = value
  console.log(change)
  // console.log("change",change)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  return (
    <>
      <Button mt={4} onClick={onOpen} bg={change?"white":"#FE0000"} textColor={change?"black":"white"}>
        QUICK VIEW
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <img src="img2.png" alt="patakha" />
                <img src="img3.png" alt="" className="my-4" />
              </div>
              <div>
                <p>Raju Rassibomb</p>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ViewModal;
