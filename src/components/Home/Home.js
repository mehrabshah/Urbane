import React from 'react'
import Community from './Community'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Icons from './Icons'
import Possible from './Possible'
import { useState } from 'react'
export default function Home() {
    const [Nav, setNav] = useState(false);
    const funcNav = () => {
      setNav(!Nav)
    }
  return (
    <div>
            <Header Nav={Nav} funcNav={funcNav} />
            
             <Hero Nav={Nav}/>
            <Icons Nav={Nav}/>
            <Possible Nav={Nav}/>
            <Community Nav={Nav}/>
            <Footer Nav={Nav}/>
    </div>
  )
}
