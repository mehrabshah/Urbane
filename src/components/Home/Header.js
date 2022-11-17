import React from 'react'
import { BiMenu } from 'react-icons/bi';
import {ImCross } from 'react-icons/im';
import { useState } from "react";
export default function Header(props) {
    const [services,setServices]=useState(false);
    const toggleServices=()=>
    {
           setServices(!services);
           setAbout(false);
           
    }
    const [about,setAbout]=useState(false);
    const toggleAbout=()=>
    {
        
           setAbout(!about);
           setServices(false);
    }
    



    return (

                
           
        <>
          {props.Nav &&  (<ImCross size={15} className="absolute top-5 left-[36rem] fill-white  sm:hidden"  onClick={props.funcNav}></ImCross>)}  
          {!props.Nav && (<BiMenu size={30} className="absolute top-2 left-2 fill-white  sm:hidden" onClick={props.funcNav} ></BiMenu>)}
            <div className='sm:h-[5.5rem]   bg-black w-screen h-[2.7rem] md:rounded-t-[5rem] md:mt-5 md:border-x-[#fff] md:border-x-[24px]'>
                <div className=' h-full w-full text-1xl font-bold  items-center  justify-evenly sm:flex hidden '>
                    <div className='flex text-[#fff] text-3xl '><img src="/images/Logo.jpeg" className='h-16'></img></div>
                    <div className='flex w-96   h-[2.8rem] items-center bg-gradient-to-r from-[rgb(255,255,255)]  to-gray-100 rounded-3xl  text-black justify-evenly '>
                        <div className='Home hover:h-8 hover:w-20 rounded-xl hover:bg-black hover:text-white hover:flex hover:justify-center hover:items-center cursor-pointer'>Home</div>
                        <div className='About hover:h-8 hover:w-20 rounded-xl hover:bg-black hover:text-white hover:flex hover:justify-center hover:items-center cursor-pointer' onClickCapture={toggleAbout}>About</div>
                        <div className='Services hover:h-8 hover:w-20 rounded-xl hover:bg-black hover:text-white hover:flex hover:justify-center hover:items-center cursor-pointer' onClickCapture={toggleServices}>Services</div>
                    </div>
                    <div className='flex'>
                        <div className='Login text-[#fff]'>Connect Wallet</div>
                    </div>
                </div>
               {props.Nav && (<div className='flex flex-col h-screen bg-black / justify-evenly items-center text-4xl / z-10'>
                    <div className='text-white '>Home</div>
                    <div className='text-white'>About</div>
                    <div className='text-white'  >Services</div>
                    <div className='text-white'>Connect Wallet</div>
                </div>)}
            </div>
            {services && (<div className=' bg-black  h-36 w-72 absolute  shadow-2xl  shadow-stone-400 left-[60.5rem]  top-[4.2rem] '>
                <ul className='flex flex-col items-center pt-5  / text-lime-400 / space-y-3'>
                 <li className='/ cursor-pointer  '>Document Verification</li>           
                 <li className='/ cursor-pointer'>Rental Contract</li> 
                 <li className='/ cursor-pointer'>Ownership Transfer</li>

                </ul>
            </div>)}
            {about && (<div className=' bg-black  h-36 / / w-44 absolute  shadow-2xl  shadow-stone-400 left-[53.5rem] / top-[4.2rem]'>
                <ul className='flex flex-col items-center / pt-10  / text-lime-400 / space-y-3 text-2xl'>
                 <li className='/ cursor-pointer'>About Us</li>           
                 <li className='/ cursor-pointer'>Team</li> 
                
                </ul>
            </div>)}

        </>
    )
}
