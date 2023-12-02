import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Input } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

function CustomModal({isOpen ,onClose, onOpen,ID}) {
    
    let [name, SetName]= useState()
    let [number, Setnumber]=useState()
    let dispatch=useDispatch();
    // const { isOpen, onOpen, onClose } = useDisclosure()

    let Type = useSelector((state)=>{
        return state.Type
})

let Id = useSelector((state)=>{
    return state.Id
})
    const handlesave=()=>{
        if(name && number){
                dispatch({type:Type,payload:{name,number,id:Type=="ADD"?uuidv4():Id}})
                onClose()
                
        }
    }

    const handlename=(e)=>{
        SetName(e.target.value);
        console.log(name)
    }

    const handlenumber=(e)=>{
        Setnumber(e.target.value);
        console.log(number);
    }

    useEffect(() => {
       console.log(Type)
    }, [Type]);

   

  return (
    <Box>
            <>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Enter Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input placeholder='Enter Name' onChange={handlename}/>
                        <Input type='number' placeholder='Enter number' onChange={handlenumber}/>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                        </Button>
                        <Button onClick={handlesave} variant='ghost'>Save</Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
    </Box>

  )
}

export default CustomModal