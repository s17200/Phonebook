import React, {useState} from 'react'
import logo from '../assets/logo.png';
import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import plus from '../assets/plus.png'
import CustomModal from './CustomModal';
import { useDispatch } from 'react-redux';


export default function Navbar({isOpen ,onClose, onOpen, Setsearch}) {
    let dispatch=useDispatch();
    

  return (
    <div>
        <Flex style={{alignItems:"center", justifyContent:"space-evenly"}}>
            <Flex style={{alignItems:"center", justifyContent:"space-between", height:"64px", width:"150px"}}>
                <img style={{width:"40px",height:"40px"}} src={logo} alt="logo" />
                <p style={{fontSize:"20px", fontFamily:"sans-serif", color:"#5F6368"}}>Phonebook</p>
            </Flex>

            <Flex >
                 <SearchIcon w={22} h={22}/>
                <Input placeholder='Search' onChange={(e)=>{
                    Setsearch(e.target.value)
                }} size='lg' />
            </Flex>

            <Flex boxShadow='xs' cursor={"pointer"} onClick={()=>{
                    onOpen()
                    dispatch({type:"change",payload:{Type:"ADD",id:"0"}})
                   
                }}>
                 <img style={{width:"40px",height:"40px"}} src={plus} alt="plus" />
                <p>Create Contact</p>
            </Flex>

             <CustomModal  isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
        </Flex>

        <div>

        </div>

    </div>
  )
}
