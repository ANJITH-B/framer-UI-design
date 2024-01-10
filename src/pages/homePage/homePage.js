import { Button } from '@chakra-ui/react'
import React from 'react'
import ThemeToggle from '../../components/setting/settings';
import Auth from '../../layout/Auth';
import Navbar from '../../components/navBar/navBar';
import Banner from '../../layout/banner';



const homePage = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Button>homeP</Button>
      <ThemeToggle/>
      <Auth/>
    </div>
  )
}

export default homePage;
