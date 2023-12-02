import Contact from '../Components/Contact'
import { useSelector } from 'react-redux'
import React, { useEffect,useState } from 'react'

function Home({isOpen ,onClose, onOpen,search}) {
 const [Allcontact,SetAllcontact]=useState([])

let contacts = useSelector((state)=>{
        return state.contacts
})

useEffect(()=>{
    console.log(contacts)
    console.log(search)
    if(!search){
        SetAllcontact(contacts)
    }else{
        SetAllcontact(contacts.filter(contact=>{
            console.log(contact.name)
            if(contact.name.startsWith(search)){
                return contact
            }
        }))
    }
},[contacts,search])    

  return (
    <>
    
    {Allcontact.map((contact)=>{
            return <Contact name={contact.name} number={contact.number} id={contact.id} isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
    })}
    
    </>
    
  )
}

export default Home