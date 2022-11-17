import React from 'react'
import { AiFillTwitterCircle} from 'react-icons/ai';
import { FaTelegram} from 'react-icons/fa';
import {BsDiscord } from 'react-icons/bs';

export default function Community() {
  return (
    <div>
      <div className='w-screen md:h-[60vh] h-screen md:-mt-40 / -mt-72'>
        <div className='flex flex-col w-full h-full items-center justify-center'>
          <div className='flex flex-col items-center justify-center w-full h-full space-y-4 / text-center '>
            <div>
              <h1 className='text-5xl font-bold'>Join the Barbane Community</h1>
            </div>
            <div>
              <p>Join the growing Barbane Community</p>
            </div>
          </div>
          <div className=' grid md:grid-cols-3 grid-cols-1 md:gap-x-40  md:-mt-44 / / / -mt-72 / gap-y-10 '>
            <div className='flex items-center justify-center space-x-4 font-bold'>
               <div>
                 <AiFillTwitterCircle size={50} className="fill-sky-500"></AiFillTwitterCircle>
               </div>
               <div>Twitter</div>

            </div>
            <div className='flex items-center justify-center space-x-4 font-bold'>
               <div>
                <FaTelegram size={50} className="fill-sky-500"></FaTelegram>
               </div>
               <div>
                Telegram
               </div>

            </div>
             <div className='flex items-center justify-center space-x-4 font-bold'>
                <div>
                  <BsDiscord size={50} className="fill-violet-800"></BsDiscord>
                </div>
                <div>
                  Discord
                </div>


             </div>
            </div>
            
          </div>
        </div>
      </div>
    

  )
}
