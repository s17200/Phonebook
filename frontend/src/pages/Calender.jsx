import { Flex, Input, Box } from '@chakra-ui/react'
import React from 'react'


export default function Calender() {
    let x="Wednesday"
  return (
    <Flex >
        <Input w={"40%"} type='date'/>

        <Box m={"auto"}>
            <Flex>
                    <Box style={{PointerEvent:x=="Wednesday"?"none":"all", backgroundColor:x=="Wednesday"?"grey":"green"}}>8:00 AM</Box>
                    <Box>8:30 AM</Box>
                    <Box>8:45 AM</Box>
            </Flex>

            <Flex>
                <Box>9:00 AM</Box>
                <Box>12:00 Noon</Box>
            </Flex>

            <Flex>
                    <Box>12:30 PM</Box>
                    <Box>5:00 PM</Box>
            </Flex>

            <Flex>
                        <Box>5:30 PM</Box>
                        <Box>8:30 PM</Box>
            </Flex>

        </Box>
    </Flex>


    
  )
}
