import React from 'react'
import {Button} from '@mui/material'

interface Props {
    text:string;
    onClick: () => void
}
const MenuButton = ({ text, onClick }:Props) => {
  return (
    <Button size='large' onClick={onClick} sx={{
        width:"30vw",
        height:"15vh",
        border:1,
        borderColor:"black",
        top:'14vh',
        mt:2,
        fontFamily:'Montserrat',
        fontSize:"25px",
        fontWeight:'700',
        color:'black',
        borderRadius:'15px',
        backgroundColor:"rgb(35, 236, 236)"
    }}>
        {text}
    </Button>
  )
}

export default MenuButton