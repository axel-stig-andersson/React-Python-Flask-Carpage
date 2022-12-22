import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { apiRequest } from '../apiRequest'
import { Car } from '../model'
import {cars as carsAtom} from '../recoil'

const AddCarPage:React.FC = () => {

const [cars, setCars] = useRecoilState<Car[]>(carsAtom)
const [brand, setBrand] = useState<string>("")
const [model, setModel] = useState<string>("")
const [desc, setDesc] = useState<string>("")

const addCar = async () => {
    if (brand && model && desc) {
        return apiRequest("cars", "POST", {
            brand:brand,
            model:model,
            description:desc
        })
    }
}

const handleSubmit = () => {
    addCar()
    alert("You added a car! you can find it on All Cars")
}

const navigate = useNavigate()
const returnToStart = () => {
    setTimeout(() => { 
        navigate("/");
      });
}

  return (
    <Box sx={{alignItems:'center', justifyContent:'center', display:'flex', flexDirection:'column'}}>
        <Typography sx={{fontFamily: 'Montserrat', 
                fontSize:"70px", 
                fontWeight: '900',
                marginTop:'30px'}}>
            Feel free to add a car!
        </Typography>
        <Box sx={{alignItems:'center', justifyContent:'center', 
                display:'flex', flexDirection:'column',
                backgroundColor:'rgb(35, 236, 236)',
                width:'80%', padding:'20px', borderRadius:'20px'}}>
            <Typography sx={{fontFamily: 'Montserrat', fontSize:'25px', fontWeight:'900'}}>
                Brand:
            </Typography>
            <TextField placeholder='Insert a brand' sx={{width:'80%', 
                        marginBottom:'20px', backgroundColor:'white'}}
                        onChange={(e) => setBrand(e.target.value)}/>
            <Typography sx={{fontFamily: 'Montserrat', fontSize:'25px', fontWeight:'900'}}>
                Model:
            </Typography>
            <TextField placeholder='Insert a model' sx={{width:'80%',
                        marginBottom:'20px', backgroundColor:'white'}}
                        onChange={(e) => setModel(e.target.value)}/>
            <Typography sx={{fontFamily: 'Montserrat', fontSize:'25px', fontWeight:'900'}}>
               Description:
            </Typography>
            <TextField placeholder='Write a description!' sx={{width:'80%', 
                        marginBottom:'20px', backgroundColor:'white'}} multiline rows='4'
                        onChange={(e) => setDesc(e.target.value)}/>
            <Button sx={{width:'max', padding:'20px', 
                    backgroundColor:'rgb(0, 51, 51)', color:'white', mt:2, marginBottom: '2vh',
                    '&:hover': {
                        backgroundColor: 'rgb(32, 132, 132)',
                        }}}
                        onClick={() => handleSubmit()}>
            Add Car
            </Button>
        </Box>
        <Button sx={{width:'max', padding:'20px', 
                    backgroundColor:'rgb(0, 51, 51)', color:'white', mt:2, marginBottom: '14vh',
                    '&:hover': {
                        backgroundColor: 'rgb(32, 132, 132)',
                        }}}
                    onClick={() => returnToStart()}>
            Return to startpage
            </Button>
    </Box>
  )
}

export default AddCarPage