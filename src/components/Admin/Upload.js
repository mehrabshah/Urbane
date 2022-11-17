import React from 'react'

export default function Upload() {
    return (
        <div>
            <div className=' h-screen w-screen bg-black'>
                <div className='grid grid-cols-5 h-full w-full'>
                    <div className=' col-span-1'>
                        <div className='flex flex-col  / pt-60 gap-y-4 items-center'>
                            <button className='bg-[#fff] / w-3/4 rounded-md h-8'>Retrieve File</button>
                            <button className='bg-[#fff] w-3/4 rounded-md h-8'>Upload File</button>
                            <button className='bg-[#fff] w-3/4 rounded-md h-8'>Verify Ownership</button>
                            <button className='bg-[#fff] w-3/4 rounded-md h-8'>Rental Agreement</button>
                        </div>
                    </div>
                    <div className='col-span-4 border-[23px] border-[#fff]'>
                        <div className='flex items-center justify-end pt-8'>
                            <div className='flex / items-center justify-center bg-[#fff]  w-[28rem] h-8'><h1>Upload Document to Decentralized Storage</h1></div>
                        </div>
                        <div className='flex items-center justify-center / pt-20'>
                            <div className='flex items-center justify-center bg-[#fff]  / w-60 h-10 border-2 / border-purple-800' >
                                <h1>Select Area</h1>
                            </div>
                            <div className='flex items-center justify-center bg-[#fff] w-60 h-10 border-2 / border-purple-800'>
                                <h1>Select Block</h1>
                            </div>
                            <div className='flex items-center justify-center bg-[#fff] w-60    h-10 border-2 / border-purple-800'>
                                <h1>Select Plot</h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-enstart pt-16'>
                            <div className='flex / items-center justify-center bg-[#fff]  w-[28rem] h-8'><h1>Enter Owner's info</h1></div>
                        </div>
                        <div className='flex flex-col pt-16 gap-y-8'>
                            <div className='flex flex-row items-center justify-center gap-7'>
                                <div className='flex flex-row items-center / justify-between gap-7'>
                                <label for="peas" className='text-[#fff]'>First Name</label>
                                <input type="text" name="peas" id="peas" className='/ w-[12rem] h-7 rounded-md'/>
                               </div>
                                <div className='flex flex-row / items-center justify-center  gap-7'>
                                <label for="peas" className='text-[#fff]'>Last Name</label>
                                <input type="text" name="peas" id="peas" className='w-[12rem] h-7 / rounded-md'/>
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-center gap-7'>
                            <div className='flex flex-row items-center / justify-between '>
                                <label for="peas" className='text-[#fff]'>CNIC</label>
                                <input type="text" name="peas" id="peas" className='/ w-[12rem] h-7 rounded-md ml-[4.8rem]'/>
                               </div>
                                <div className='flex flex-row / items-center justify-center '>
                                <label for="peas" className='text-[#fff]'>Date of Birth</label>
                                <input type="text" name="peas" id="peas" className='w-[12rem] h-7 / rounded-md ml-3'/>
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
