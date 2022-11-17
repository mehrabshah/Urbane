import React from 'react'
export default function Footer() {
  return (
    <>
      <div className='w-screen md:h-[50vh] bg-[#fff] h-screen '>
        <div className='flex flex-col items-center justify-center w-screen'>
          <div className='flex flex-col items-center justify-center w-full space-y-16'>
            <div className='bg-black  / w-[48%]   h-[0.150rem]  '>
            </div>
            <div className='bg-black  / w-[100%]   h-[0.120rem]  '>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row w-full h-full  items-center / justify-center  gap-x-36 space-y-20 md:space-y-8'>
          <div className='flex flex-row space-x-28'>
            <div className='flex flex-col  space-y-6'>
              <div className='font-bold text-2xl'>Developers</div>
              <div className=' space-y-2'>
                <div>status </div>
                <div>Tech Support</div>
                <div>Dev Docs </div>
                <div>Validators</div>
                <div>Bug Bounty </div>
                <div>Whitepapers</div>
                <div>Subnets</div>
              </div>
            </div>
            <div className='flex  flex-col / space-y-6'>
              <div className='font-bold text-2xl'>Indivituals</div>
              <div className='/ space-y-2'>
                <div>Help Center </div>
                <div>Solutions</div>
                <div>Ecosystem</div>
                <div>Barbane Wallet</div>
                <div>Barbane Explorer</div>
              </div>
            </div>
          </div>

          <div className='flex / flex-row space-x-28 '>
            <div className='flex flex-col / space-y-6 mt-[-2.5rem]'>
              <div className='font-bold text-2xl'>Press</div>
              <div className='/ space-y-2'>
                <div>Press Inquiries</div>
                <div>Press Kit</div>
                <div>Privacy Policy</div>
                <div>Important Notice</div>
                <div className='w-32'>Subnet Tutorial Contest Terms, Conditions</div>
              </div>
            </div>
            <div className='flex flex-col / space-y-6 mt-[-2.5rem]'>
              <div className='font-bold text-2xl'>Community</div>
              <div className='/ space-y-2'>
                <div>Medium</div>
                <div>Twitter</div>
                <div>Telegram</div>
                <div>Discord</div>
                <div>Youtube</div>
                <div>Reddit</div>
                <div>Barbane Hub</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>

  )
}
