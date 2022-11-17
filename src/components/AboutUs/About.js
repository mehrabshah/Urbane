import React from 'react'
export default function About() {
  return (
    <div className='w-screen h-[100vh] bg-[#ffff]'>
      <div className='flex flex-col   h-full w-full gap-y-8 '>
        <div className='flex flex-col justify-center items-center gap-y-8'>
          <div className='pb-20'>
              <h1 className='font-bold text-3xl'>ABOUT US</h1>
          </div>
          <div>
            <h1 className='font-bold text-3xl'>
              OUR VISION:
            </h1>
          </div>
          <div>
            <p className='lg:text-start text-center'>A world where everyone creates and exchanges value efficiently, transparently, and securely.</p>
          </div>
        </div>
        <div className='flex flex-col items-center / justify-center gap-y-8'>
          <div>
            <h1 className='font-bold text-3xl'>
              OUR MISSION:
            </h1>
          </div>
          <div className='flex flex-col space-y-4 / justify-start lg:w-[36.5%] lg:text-start text-center'>
            <l1 className="list-disc">Global trust through decentralization</l1>
            <l1 className="list-disc">Simple designs that drive adoption by billions of people</l1>
            <l1 className="list-disc">Elegant technology that eliminates barriers to prosperity for all</l1>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-16'>
            <div><h1 className='text-3xl font-bold'>Our Values:</h1></div>
           <div className='flex  md:flex-row flex-col   / gap-x-60 items-center justify-center'>
               <div className='flex flex-col  gap-y-[1.4rem] items-center justify-center'>
                   <div><h1 className='font-medium text-xl'>Think Beyond</h1></div>
                   <div><p>Find the heart of the problem</p></div>
                   <div><p>Go for the biggest impact</p></div>
               </div>
               <div className='flex flex-col gap-y-[1.4rem] items-center justify-center'>
                    <div><h1 className='font-medium text-xl'>Be Courageous</h1></div>
                    <div><p>Dare to fail</p></div>
                    <div><p>Be a positive force</p></div>
               </div>
           </div>
           <div className='flex md:flex-row flex-col gap-x-[15rem] items-center justify-center '>
               <div className='flex flex-col gap-y-[1.4rem] items-center justify-center'>
                   <div><h1 className='font-medium text-xl'>Solve Creatively</h1></div>
                   <div><p>Open your mind</p></div>
                   <div><p>Share your ideas</p></div>
               </div>
               <div className='flex flex-col gap-y-[1.4rem] items-center justify-center '>
                    <div><h1 className='font-medium text-xl'>Succeed Together</h1></div>
                    <div><p>Act with integrity</p></div>
                    <div><p>Keep your promises</p></div>
               </div>
           </div>
        </div>
      </div>
    </div>
  )
}
