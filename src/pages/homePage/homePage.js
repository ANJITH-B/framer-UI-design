import { Button } from '@chakra-ui/react'
import React from 'react'
import Auth from '../../layout/Auth';
import Navbar from '../../components/navBar/navBar';
import Banner from '../../layout/banner';



const homePage = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Button>homeP</Button>
      
      <Auth/>
    </div>
  )
}

export default homePage;
