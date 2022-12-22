import React from 'react'
import {Typography} from '@mui/material'
import {Box} from '@mui/material'
import MenuButton from '../components/MenuButton'
import { useNavigate } from 'react-router-dom'

const StartPage: React.FC = () => {
    const navigate = useNavigate()

    const toAllCars = () => {
        setTimeout(() => {
            navigate("/available");
          });
    }
    const toAddCar = () => {
        setTimeout(() => {
            navigate("/add")
        });
    }


  return (
    <Box sx={{alignItems:'center', justifyContent:'center', display:'flex', flexDirection:'column'}}>
        <Typography sx={{fontSize:'70px', 
                    fontFamily: 'Montserrat', 
                    fontWeight: '900',
                    marginTop:'30px'}}>
            {'Welcome to carlist!'}
        </Typography>
        <MenuButton text='All Cars' onClick={() => toAllCars()}/>
        <MenuButton text='Upload Cars' onClick={() =>toAddCar()}/> 

    </Box>
  )
}

export default StartPage