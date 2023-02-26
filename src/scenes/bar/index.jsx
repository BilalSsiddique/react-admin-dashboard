import React from 'react'
import Header from '../../components/Header'
import { Box } from '@mui/material'
import Barchar from '../../components/Barchar'

const Bar = () => {
  return (
    <Box m='20px'>
        <Header title='Bar Chart' subtitle='Simple Bar Chart'/>
        <Box height='65vh'>
            <Barchar/>
        </Box>
    </Box>
  )
}

export default Bar