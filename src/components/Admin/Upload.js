import React from 'react'
import { Link } from 'react-router-dom'
export default function Upload() {
  return (
    <>
      <div className=' h-screen w-screen bg-[#87C0CD] '>
        <div className='grid grid-cols-5 h-full w-full'>
          <div className=' col-span-1 bg-[#F3F9FB]'>
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
              <div className='flex / items-center justify-center bg-[#113F67] text-[#fff] / w-[24rem] h-8'><h1>Ownership Verification</h1></div>
            </div>
            <div className='flex items-center justify-center / pt-20'>
              <div className='flex items-center justify-center bg-[#fff] w-28 / h-10 border-2 / border-[#113F67]' >
                <h1>Area</h1>
              </div>
              <div className='flex items-center justify-center bg-[#fff] w-28 h-10 border-2 / border-[#113F67]'>
                <h1>Block</h1>
              </div>
              <div className='flex items-center justify-center bg-[#fff] w-28 h-10 border-2 / border-[#113F67]'>
                <h1>Plot</h1>
              </div>
              <div className='flex items-center justify-center bg-[#fff] w-48 h-10 border-2 / border-[#113F67]'>
                <h1>Document Type</h1>
              </div>
              <div className='flex items-center justify-center / w-44 h-10 border-2 border-[#113F67] / bg-[#113F67] text-[#fff]'>
                <h1>...Attach file</h1>
              </div>
            </div>
            <div className='flex items-center  justify-center pt-32 / gap-96'>
              <div className='flex items-center justify-center / bg-green-600 / w-40 h-8'>
                <button className='text-[#fff] font-normal'>UPLOAD</button>
              </div>
              <div>
                <div className='flex items-center justify-center bg-red-800 w-40 h-8'>
                  <button className='text-[#fff] / font-normal'>RESET</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
