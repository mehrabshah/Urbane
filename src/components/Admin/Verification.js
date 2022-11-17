import React from 'react'
export default function Verification() {
  return (
    <>
      <div className=' h-screen w-screen bg-black '>
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
              <div className='flex / items-center justify-center bg-[#fff] / w-[24rem] h-8'><h1>Ownership Verification</h1></div>
            </div>
            <div className='flex items-center justify-center / pt-20'>
              <div className='flex items-center justify-center bg-[#fff] w-28 / h-10 border-2 / border-purple-800' >
                <h1>Area</h1>
              </div>
              <div className='flex items-center justify-center bg-[#fff] w-28 h-10 border-2 / border-purple-800'>
                <h1>Block</h1>
              </div>
              <div className='flex items-center justify-center bg-[#fff] w-28 h-10 border-2 / border-purple-800'>
                <h1>Plot</h1>
              </div>
              <div className='flex items-center justify-center bg-[#fff] w-48 h-10 border-2 / border-purple-800'>
                <h1>Document Type</h1>
              </div>
              <div className='flex items-center justify-center bg-[#fff] / w-44 h-10 border-2 / border-purple-800'>
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
