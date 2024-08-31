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
  useDisclosure,
} from "@chakra-ui/react";

function ViewModal({ value }) {
  const { change } = value;
  console.log(change);
  // console.log("change",change)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  return (
    <>
      <Button
        mt={4}
        onClick={onOpen}
        bg={change ? "white" : "#FE0000"}
        _hover={{ textColor: "black" }}
        textColor={change ? "black" : "white"}
      >
        QUICK VIEW
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="80%">
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mt-4">
              <div>
                <img src="img2.png" alt="patakha" />
                <img src="img3.png" alt="" className="my-4" />
              </div>
              <div>
                <p className="text-xl font-semibold">Raju Rassibomb</p>
                <p className="text-xl">MRP:</p>
                <p className="text-xl font-semibold">Raju's Dreams/-</p>
                <hr className="border-t-2 border-dotted border-red-500 my-5" />
                <p className="font-semibold">Product Description:</p>
                <p>
                  This product packs an extra punch, thanks to the literal
                  blood, sweat and tears of a young boy.{" "}
                </p>
                <hr className="border-t-2 border-dotted border-red-500 my-5" />
                <p className="font-semibold">Product Contents:</p>
                <ul>
  <li>
    <img src="list.png" alt="Rassi bombs" className="inline-block mr-2" />
    10 hand-hurting pieces of rassi bombs
  </li>
  <li>
    <img src="list.png" alt="Great pain" className="inline-block mr-2" />
    Jilled with great pain
  </li>
  <li>
    <img src="list.png" alt="Raju's hopes" className="inline-block mr-2" />
    Raju’s hopes
  </li>
</ul>


                <hr className="border-t-2 border-dotted border-red-500 my-5" />
                <p className="font-semibold">Shipping Time: </p>
                <p>Before Raju understands that his dreams do not matter. </p>

                <button className="bg-[#FE0000] text-white font-semibold  px-4 py-2 rounded-md my-4">Choose Now</button>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ViewModal;
