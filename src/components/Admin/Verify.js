import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Verify() {
    const [state , setState] = useState({
        firstname : "",
        lastname : "",
        cnin :"",
        dob :"",
      })
      const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }


    return (
        <div>
            <div className=' h-screen w-screen bg-[#87C0CD]'>
                <div className='grid grid-cols-5 h-full w-full'>
                    <div className=' col-span-1 h-full bg-[#F3F9FB]'>
                        <div className='flex flex-col  / pt-20 gap-y-4 items-center'>
                            <img src="/images/Logo.jpeg" className='/ h-40'></img>
                            <button className='bg-[#226597] / w-3/4 rounded-md h-8 text-[#fff]'><Link to="/retrieve">Retrieve Degree</Link></button>
                            <button className='bg-[#226597] w-3/4 rounded-md h-8 text-[#fff]'><Link to="/upload">Upload Degree</Link></button>
                            <button className='bg-[#226597] w-3/4 rounded-md h-8 text-[#fff]'><Link to="/verify">Verify Degree</Link></button>
                            <div className='flex flex-col / w-3/4 / h-[22rem] items-center justify-center / border-[15px] mt-20 border-[#113F67]'>
                                <div></div>
                                <div className='flex items-center justify-center bg-[#113F67] / w-24 text-[#fff] rounded-md mt-36'><button>Log Out</button></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-4 border-[23px] border-[#113F67]'>
                        <div className='flex items-center justify-end pt-8'>
                            <div className='flex / items-center justify-center bg-[#226597] text-[#fff] w-[28rem] h-8'><h1>Upload Document to Decentralized Storage</h1></div>
                        </div>
                        <div className='flex items-center justify-center / pt-20'>
                            <div className='flex items-center justify-center bg-[#fff]  / w-60 h-10 border-2 / border-[#113F67]' >
                                <h1>Select Area</h1>
                            </div>
                            <div className='flex items-center justify-center bg-[#fff] w-60 h-10 border-2 / border-[#113F67]'>
                                <h1>Select Block</h1>
                            </div>
                            <div className='flex items-center justify-center bg-[#fff] w-60    h-10 border-2 / border-[#113F67]'>
                                <h1>Select Plot</h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-enstart pt-16'>
                            <div className='flex / items-center justify-center bg-[#113F67] text-[#fff]  w-[28rem] h-8'><h1>Enter Owner's info</h1></div>
                        </div>
                        <div className='flex flex-col pt-16 gap-y-8'>
                            <div className='flex flex-row items-center justify-center gap-7'>
                                <div className='flex flex-row items-center / justify-between gap-7'>
                                    <label for="peas" className='text-black'>First Name</label>
                                    <input type="text" name="peas" id="peas" className='/ w-[12rem] h-7 rounded-md' value={state.firstname}  onChange={handleChange} />
                                </div>
                                <div className='flex flex-row / items-center justify-center  gap-7'>
                                    <label for="peas" className='text-black'>Last Name</label>
                                    <input type="text" name="peas" id="peas" className='w-[12rem] h-7 / rounded-md' value={state.lastname}  onChange={handleChange}/>
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-center gap-7'>
                                <div className='flex flex-row items-center / justify-between '>
                                    <label for="peas" className='text-black'>CNIC</label>
                                    <input type="text" name="peas" id="peas" className='/ w-[12rem] h-7 rounded-md ml-[4.8rem]' value={state.cnic}  onChange={handleChange}/>
                                </div>
                                <div className='flex flex-row / items-center justify-center '>
                                    <label for="peas" className='text-black`'>Date of Birth</label>
                                    <input type="text" name="peas" id="peas" className='w-[12rem] h-7 / rounded-md ml-3' value={state.dob}  onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row / justify-evenly ml-[29.5rem]  items-center pt-20'>
                            <button className='/ bg-green-600 text-[#fff] w-36 h-10'>Verify</button>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    )
}
