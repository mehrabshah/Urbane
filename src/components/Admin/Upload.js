import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
export default function Upload() {
  const optionsArea = ["Area", "Dummy1", "Dummy2"];
  const [Area, setArea] = useState(optionsArea[0]);
  const optionsBlock = ["Block", "Dummy1", "Dummy2"];
  const [Block, setBlock] = useState(optionsBlock[0]);
  const optionsPlot = ["Plot", "Dummy1", "Dummy2"];
  const [Plot, setPlot] = useState(optionsPlot[0]);
  const optionsDocument = ["Document", "Dummy1", "Dummy2"];
  const [Document, setMonth] = useState(optionsDocument[0]);
  const Upload=()=>
  {

  }
  const Reset=()=>
  {

    
  }




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
            <div className='flex items-center justify-center / pt-20 space-x-1'>
              <div className='flex items-center justify-center' >
                <div>
                  <select value={Area} onChange={(e) => setArea(e.target.value)} className="h-10 w-32 bg-[#fff]">
                    {optionsArea.map((value) => (
                      <option value={value} key={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='flex items-center justify-center '>
                <div>
                  <select value={Block} onChange={(e) => setBlock(e.target.value)} className="h-10 w-32 bg-[#fff]">
                    {optionsBlock.map((value) => (
                      <option value={value} key={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className='flex items-center justify-center'>
                <div>
                  <select value={Plot} onChange={(e) => setBlock(e.target.value)} className="h-10 w-32 bg-[#fff]">
                    {optionsPlot.map((value) => (
                      <option value={value} key={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>

              </div>
              <div className='flex items-center justify-center '>
                <div>
                  <select value={Document} onChange={(e) => setBlock(e.target.value)} className="h-10 w-60 bg-[#fff]">
                    {optionsDocument.map((value) => (
                      <option value={value} key={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>


              </div>
              <div className='flex items-center justify-center / w-44 h-10 border-2 border-[#113F67] / bg-[#113F67] text-[#fff]'>
                <h1>...Attach file</h1>
              </div>
            </div>
            <div className='flex items-center  justify-center pt-32 / gap-96'>
              <div className='flex items-center justify-center / bg-green-600 / w-40 h-8'>
                <button className='text-[#fff] font-normal' onSubmit={Upload()}>UPLOAD</button>
              </div>
              <div>
                <div className='flex items-center justify-center bg-red-800 w-40 h-8'>
                  <button className='text-[#fff] / font-normal' onSubmit={Reset()}>RESET</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
