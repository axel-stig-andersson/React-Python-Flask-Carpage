import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { apiRequest } from '../apiRequest'
import CarCard from '../components/CarCard'
import { Car } from '../model'
import {cars as carsAtom} from '../recoil'

const CarPage: React.FC = () => {
    
    const [cars, setCars] = useRecoilState<Car[]>(carsAtom)
    const [searchInput, setSearchInput] = useState<string>("")

    const fetchAll = async () => {
        const allCars = await apiRequest("/cars", "GET")
        setCars(allCars)
    }

    const navigate = useNavigate()
    const returnToStart = () => {
        setTimeout(() => { 
            navigate("/");
          });
    }

    useEffect(() => {
        console.log("Effect")
        fetchAll()
    }, []) 
    

    
  return (
    <>
    <Box sx={{alignItems:'center', justifyContent:'center', display:'flex', flexDirection:'column'}}>
        <Typography sx={{fontFamily: 'Montserrat', 
                        fontSize:"70px", 
                        fontWeight: '900',
                        marginTop:'30px'}}>
            All Available Cars
        </Typography>
        <TextField placeholder='Search for a brand or model' sx={{width:'80%'}}
            onChange={(e) => 
            setSearchInput(e.target.value)
            }/>
            {!searchInput? cars.map((car) => (
                <CarCard key={car.id} brand={car.brand} model={car.model} description={car.description}/>
            )):
            cars.filter((car) => {
                return car.brand.toLowerCase().startsWith(searchInput.toLowerCase()) || 
                        car.model.toLowerCase().startsWith(searchInput.toLowerCase())
            }).map((car) => (
                <CarCard key={car.id} brand={car.brand} model={car.model} description={car.description}/>
            ))} 
        {/* <CarCard brand='Volvo' model='V70' description='One of the all time greats! Make yourself at home'/> */}
        <Button sx={{width:'max', padding:'20px', 
                    backgroundColor:'rgb(0, 51, 51)', color:'white', mt:2, marginBottom: '14vh',
                    '&:hover': {
                        backgroundColor: 'rgb(32, 132, 132)',
                        }}}
                    onClick={() => returnToStart()}>
            Return to startpage
            </Button>
    </Box>
    </>
  )
}

export default CarPage