import React from 'react'
import { MdDomainVerification} from 'react-icons/md';
import { FaHome} from 'react-icons/fa';
import {HiDocumentText} from 'react-icons/hi'


export default function Icons() {
    return (


        <>
           <div  className=' bg-[#fff] w-screen md:h-[70vh] h-[140vh]'>
            <div className=' flex / flex-col md:flex-row w-full h-full items-center justify-center md:gap-x-36 gap-y-16'>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <MdDomainVerification size={250} className=" fill-slate-900"></MdDomainVerification>
                    </div>
                    <div className='/ text-3xl text-center font-medium text-slate-900'>
                       Document Verification
                    </div>
                </div>
                <div className="flex flex-col / justify-center items-center">
                    <div>
                       
                      <FaHome size={250} className=" fill-slate-900"></FaHome>
                        
                    </div>
                    <div className='text-3xl text-center font-medium text-slate-900'>
                       Rental Contract


                    </div>
                </div>
                <div className='flex flex-col  justify-center  items-center'>
                    <div>
                      <HiDocumentText size={250} className=" fill-slate-900"></HiDocumentText>

                    </div>
                    <div className='text-3xl text-center font-medium / text-slate-900'>

                      Ownership Transfer

                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
