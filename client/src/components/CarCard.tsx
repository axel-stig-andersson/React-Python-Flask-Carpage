import { Card, Typography } from '@mui/material'
import { fontWeight } from '@mui/system'
import React from 'react'

interface Props {
    brand: string;
    model: string;
    description: string;
}

const CarCard = ({brand, model, description}:Props) => {
  return (
    <Card sx={{mt:'30px', width:"80%", 
                backgroundColor: 'rgb(32, 132, 132)', textAlign:'center', 
                color:'white', padding:'20px'}}>
        <Typography sx={{fontFamily:'Montserrat',
                        fontWeight:"900", fontSize:'30px'}}>
            Brand: {brand}
        </Typography>
        <Typography sx={{fontFamily:'Montserrat',
                        fontWeight:"900", fontSize:'20px'}}>
            Model: {model}
        </Typography>
        <Typography sx={{fontFamily:'Montserrat',
                        fontWeight:"900", fontSize:'15px'}}>
            {description}
        </Typography>
    </Card>
  )
}

export default CarCard