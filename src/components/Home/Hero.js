import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
export default function Hero() {
    return (
        <div>
                 <div className=' h-screen     w-screen bg-black / md:rounded-b-[5rem] md:border-x-[#fff] md:border-x-[25px] '>
                <div className="flex  h-screen / md:w-1/2 w-full flex-col  / text-[#fff] justify-center items-center   space-y-8 / -mt-6`">
                    
                        <div className='flex flex-col   md:text-start md:ml-[11.2rem]'>
                            <h1 className='xl:text-8xl text-4xl font-bold '>SCALE WITH</h1>
                            <h1 className='xl:text-8xl text-4xl font-bold'>URBANE</h1>
                        </div>
                        <div className='flex '>
                        <p className='md:w-[48rem] w-96  leading-9 text-xl / md:ml-96   md:text-start'>  A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain. Each block in the chain contains a number of transactions, and every time a new transaction occurs on the blockchain, a record of that transaction is added to every participant’s ledger.
                        </p>
                        </div>

                        <div className='flex /  / bg-violet-800 justify-center / text-black items-center  md:-ml-60 w-36 h-12 rounded-xl'>
                            <button type='button'>Launch App</button>
                        </div>
                </div>
            </div>
        </div>
    )
}
