import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
export default function Possible() {
    return (
        <div>
            <div className="lg:h-screen  h-[160vh] w-screen bg-black md:rounded-[7rem]">
                <div className='h-full w-full flex flex-col justify-center items-center space-y-32 ' >
                    <div className='flex flex-col justify-center items-center space-y-8  md:mr-[9.5rem]'>
                        <h1 className='font-bold md:text-4xl text-2xl text-[#fff]'>What's Possible with Barbane?</h1>
                        <p className='/ text-slate-500 md:text-2xl text-center'>Avalanche is an open, programmable smart contracts platform for decentralized applications.</p>
                    </div>
                    <div className='grid  md:grid-cols-2 lg:grid-cols-3 / grid-cols-1 / space-y-24 md:space-y-0'>
                        <div className='flex flex-col / w-72 space-y-8'>
                            <div className='text-[#fff] font-bold'>
                                Build fast, low cost, Solidity-compatible dApps
                            </div>
                            <div className='text-slate-500 '>
                                Launch Ethereum dApps that confirm transactions instantly and process thousands of transactions per second, far beyond any decentralized blockchain platform today.
                            </div>
                            <div>
                                <BsArrowRight className='fill-[#fff]' size={40}></BsArrowRight>
                            </div>
                        </div>
                        <div className='flex flex-col / / w-80 space-y-8'>
                            <div className='text-[#fff] font-bold text-2xl'>
                                Launch customized blockchains, private  public
                            </div>
                            <div className='text-slate-500'>
                                Deploy blockchains that fit your own application needs. Build your own virtual machine and dictate exactly how the blockchain should operate.
                            </div>
                            <div>
                               <BsArrowRight className='fill-[#fff]' size={40}></BsArrowRight>
                            </div>
                        </div>
                        <div className='flex flex-col w-96 space-y-8' >
                            <div className='text-[#fff] font-bold text-2xl'>
                                Scale to millions of validators with minimal hardware
                            </div>
                            <div className='text-slate-500'>
                                Stake, or lock up, your AVAX to help process transactions and further secure the platform–providing security guarantees well-above the 51% standard. You probably have the hardware required to join the platform.
                            </div>
                            <div>
                               <BsArrowRight className='fill-[#fff]' size={40}></BsArrowRight>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
