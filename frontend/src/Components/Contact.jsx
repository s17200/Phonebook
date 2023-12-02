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
    <Flex style={{height:"100px", width:"90%", justifyContent:"space-between", alignItems:"center" }}>

            <Box>
            <Avatar name='Sasuke Uchiha' bg={"pink"} />
            </Box>

            <Flex>
                    <p>{name}</p>
            </Flex>    

             <Flex >
                <p>{number}</p>
            </Flex>  

            <Box>
                <EditIcon onClick={()=>{
                    onOpen()
                    dispatch({type:"change",payload:{Type:"EDIT", id}})
                   
                }}/>
               
            </Box>

            <Box>
                <DeleteIcon onClick={handledelete}/>   
            </Box>
         
            {/* <CustomModal ID={id} isOpen={isOpen} onClose={onClose} onOpen={onOpen}/> */}
    </Flex>
  )
}
