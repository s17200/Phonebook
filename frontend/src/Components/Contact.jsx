import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Avatar} from '@chakra-ui/react'
import { EditIcon, DeleteIcon} from '@chakra-ui/icons'
import { useDispatch } from 'react-redux';
import CustomModal from './CustomModal';


export default function Contact({ name, number,id,isOpen ,onClose, onOpen}) {

    let dispatch=useDispatch();
    const [edit,Setedit]=useState(false)

    const handledelete=()=>{
        dispatch({type:"DELETE",payload:id})
    }

    

  return (
    <Flex style={{height:"100px", width:"90%", justifyContent:"space-evenly", alignItems:"center" }}>

        
            <Flex alignItems={"center"}>
                    <Avatar name={name} bg={"orange"} mr={"20px"}/>
                    <p style={{width:"100px"}}>{name}</p>
            </Flex>    

             <Flex >
                <p >{number}</p>
            </Flex>  

           

            <Flex alignItems={"center"}>
                <EditIcon onClick={()=>{
                        onOpen()
                        dispatch({type:"change",payload:{Type:"EDIT", id}})
                    
                    }} cursor={"pointer"}/>
                <DeleteIcon ml={"20px"} onClick={handledelete} cursor={"pointer"}/>   
            </Flex>
         
            {/* <CustomModal ID={id} isOpen={isOpen} onClose={onClose} onOpen={onOpen}/> */}
    </Flex>
  )
}
