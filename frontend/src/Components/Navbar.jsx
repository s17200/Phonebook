import React, {useState} from 'react'
import logo from '../assets/logo.png';
import calender from '../assets/calender.png';
import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import plus from '../assets/plus.png'
import CustomModal from './CustomModal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function Navbar({isOpen ,onClose, onOpen, Setsearch}) {
    let dispatch=useDispatch();
    const navigate=useNavigate();

  return (
    <div>
        <Flex  style={{flexWrap:"wrap" ,alignItems:"center", justifyContent:"space-evenly"}}>

            <Flex onClick={()=>{
            console.log("home")
            navigate('/');
        }} style={{alignItems:"center", justifyContent:"space-between", height:"64px", width:"150px"}}>
                <img style={{width:"40px",height:"40px"}} src={logo} alt="logo" />
                <p style={{fontSize:"20px", fontFamily:"sans-serif", color:"#5F6368"}}>Phonebook</p>
            </Flex>

            <Flex onClick={()=>{
                console.log("cal")
                navigate('/calender')
            }} style={{alignItems:"center", justifyContent:"space-between", height:"64px", width:"150px"}}>
                <img style={{width:"40px",height:"40px"}} src={calender} alt="logo" />
                <p style={{fontSize:"20px", fontFamily:"sans-serif", color:"#5F6368"}}>Calender</p>
            </Flex>

            <Flex alignItems={"center"} bg={"#f1f3f4"} padding={"0,8px"} borderRadius={"10px"} paddingLeft={"8px"}>
                 <SearchIcon w={22} h={22}/>
                <Input border={"none"} placeholder='Search' onChange={(e)=>{
                    Setsearch(e.target.value)
                }} size='lg' />
            </Flex>

            <Flex mt={"10px"} boxShadow='xs' cursor={"pointer"} onClick={()=>{
                    onOpen()
                    dispatch({type:"change",payload:{Type:"ADD",id:"0"}})
                   
                }} padding={"0,10px"} w={"180px"}  alignItems={"center"} justifyContent={"space-evenly"} fontWeight={"500"} borderRadius={"50px"} shadow={"lg"}>
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
