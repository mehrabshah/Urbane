import React from 'react'
import { FaUserTie } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';
export default function Login() {
    return (
        <div className=' h-screen w-screen bg-[#113F67] '>
            <div className='flex flex-row h-full  w-full items-center justify-center  space-x-20 '>
                <div className='flex flex-row border-8 border-black  w-[30%] h-1/2 items-center justify-center space-x-4 bg-[#87C0CD]'>
                <div className='flex flex-col / space-y-6 / mt-[1.5rem]'>
                    <div>
                        <FaUserTie size={200}></FaUserTie>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='text-black font-bold'>
                        

                        <Link to="/loginUser" className='/ cursor-pointer'>Login As User</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col  -space-y-2 '>
                    <div>
                        <MdAdminPanelSettings size={250}></MdAdminPanelSettings>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='text-black font-bold'>
                        <Link to="/loginAdmin" className='cursor-pointer'>Login As Admin</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
