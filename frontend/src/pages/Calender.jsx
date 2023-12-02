import { Flex, Input, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'


export default function Calender() {
  
   
    let [timing, Settiming]=useState([]);
    let [day1,Setday1]=useState();

    

    const handleday=((val)=>{
        let day=new Date(val)
        console.log(day.getDay())
        Setday1(day.getDay())
        console.log(timing)
    })

    useEffect(()=>{
      filltime()
    },[day1])

    const filltime=()=>{
      let arr=[];
      var year = '2013';
      var month = '04';
      var day = '18';
      
      var hour = '7';
      var min = '45';
      
      var reserv = new Date(year,month,day,hour,min)
      
      // reserv+=900000;
      for(let i=1;i<28;i++){
        var dt2= new Date(reserv.getTime()+(1800000*i))
        //console.log(dt2.getHours(),dt2.getMinutes());

        let time;

        if(dt2.getHours()<12){
          time=dt2.getHours()+":"+dt2.getMinutes()+" AM";
        }else if(dt2.getHours()==12){
          time=dt2.getHours()+":"+dt2.getMinutes()+" PM";
        }else{
          time=dt2.getHours()-12+":"+dt2.getMinutes()+" PM";
        }

        let obj={
          time,
          "enabled":true
        }
        console.log(day1,typeof day1)
        if(day1>=1 && day1<=5){
          if( time.startsWith("12:45")){
            obj.enabled=false;
          }
          if(day1==3){
            if( time.startsWith("3:45") || time.startsWith("4:15")){
              obj.enabled=false;
            }
          }
        }else if(day1==0){
            obj.enabled=false;
        }else if(day1==6){
          if( time.endsWith("PM")){
            obj.enabled=false;
          }
        }

        if(+time[0]>4 && time.endsWith("PM")){
          obj.enabled=false;
        }
        
        arr.push(obj)
      }
      Settiming(arr);
      console.log(timing)
    }

    

  let Style={
    padding:"5px", borderRadius:"10px", cursor:"pointer",width:"100px", border:"1px solid black", margin:"5px"
  }

  return (
    <Flex padding={"20px"} pt={"50px"} justifyContent={"space-evenly"}>
        <Input w={"40%"} type='date' onChange={(e)=>{
          handleday(e.target.value);
              // Setday(e.target.value)
        }}/>

        <Box w={"50%"}>

            <Flex flexWrap={"wrap"}>
                   { timing.map((t)=>{
                        return <Box style={{backgroundColor:t.enabled?"transparent":"grey",...Style}}>{t.time}</Box>
                   })}
                   
            </Flex>

        </Box>
    </Flex>


    
  )
}
