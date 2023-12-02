import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';

export default function Allroutes({isOpen ,onClose, onOpen,search}) {
  return (
    <Routes>
        <Route path="/"  element={<Home isOpen={isOpen} onClose={onClose} onOpen={onOpen} search={search}/>}/>
        
    </Routes>
  )
}
