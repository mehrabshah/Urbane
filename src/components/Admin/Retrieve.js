import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';
export default function Retrieve() {
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

                <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown divider <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div id="dropdownDivider" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                    <li>
                      <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center bg-[#fff] w-60 h-10 border-2 / border-purple-800'>
                <div>
                  Select Date
                </div>
                <div>
                  <RiArrowDropDownLine size={30} />
                </div>
              </div>
              <div className='flex items-center justify-center bg-[#fff] w-60    h-10 border-2 / border-purple-800'>
                <div>
                  Select Year
                </div>
                <div>
                  <RiArrowDropDownLine size={30} />
                </div>
              </div>
              <div className='flex items-center justify-center / bg-blue-800 w-40 text-[#fff]   h-10 border-2 / border-purple-800'>
                <h1>Search</h1>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
