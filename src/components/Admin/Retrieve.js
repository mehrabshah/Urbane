import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
export default function Retrieve() {
  return (
    <div>
      <div className=' h-screen w-screen bg-[#87C0CD]'>
        <div className='grid grid-cols-5 h-full w-full'>
          <div className=' col-span-1 h-full'>
            <div className='flex flex-col / pt-20 gap-y-4 items-center h-full  bg-[#F3F9FB]'>
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
              <div className='flex / items-center justify-center bg-[#113F67] text-[#fff] w-[28rem] h-8'><h1>Upload Document to Decentralized Storage</h1></div>
            </div>
            <div className='flex items-center justify-center / pt-20'>
              <div className='flex items-center justify-center bg-[#fff]  / w-60 h-10 border-2 / border-[#226597]' >
                 <div>Select Day</div>
              </div>
              <div className='flex items-center justify-center bg-[#fff] w-60 h-10 border-2 / border-[#226597]'>
                <div>
                  Select Date
                </div>
                <div>
                  <RiArrowDropDownLine size={30} />
                </div>
              </div>
              <div className='flex items-center justify-center bg-[#fff] w-60    h-10 border-2 / border-[#226597]'>
                <div>
                  Select Year
                </div>
                <div>
                  <RiArrowDropDownLine size={30} />
                </div>
              </div>
              <div className='flex items-center justify-center / bg-[#226597] w-40 text-[#fff]   h-10 border-2 / border-[#226597]'>
                <h1>Search</h1>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
