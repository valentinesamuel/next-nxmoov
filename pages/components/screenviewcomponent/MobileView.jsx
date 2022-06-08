import { Box } from '@chakra-ui/react'
import React from 'react'
import MobileCard from './MobileCard'

const MobileView = () => {
  return (
    <Box width="100%">
      <MobileCard/>
      <MobileCard/>
      <MobileCard/>
      <MobileCard/>
      <MobileCard/>
    </Box>
  )
}

export default MobileView