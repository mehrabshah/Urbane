import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useState } from "react";
export default function Retrieve() {


  const optionsDate = ["Date","1", "2", "3","4","5","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21"
    ,"22","23","24","25","26","27","28","29","30","31"];
  const [Date, setDate] = useState(optionsDate[0]);
  const optionsMonth = ["Month","January", "Febuary", "March","April","May","June","July","August","September","October","November","December"];
  const [Month, setMonth] = useState(optionsMonth[0]);
  const optionsYear = ["Year","2000", "2001", "2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"
   ,"2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"];
   const [Year, setYear] = useState(optionsYear[0]);
   const Search=()=>
   {



   }
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
            <form className='flex items-center justify-center / pt-20 space-x-1'>
              <div className='flex items-center justify-center' >
                <div >
                  <select value={Date} onChange={(e) => setDate(e.target.value)} className="h-10 w-60 bg-[#fff]">
                    {optionsDate.map((value) => (
                      <option value={value} key={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <div>
                <select value={Month} onChange={(e) => setMonth(e.target.value)} className="h-10 w-60 bg-[#fff]">
                    {optionsMonth.map((value) => (
                      <option value={value} key={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='flex items-center justify-center '>
                <div>
                <select value={Year} onChange={(e) => setYear(e.target.value)} className="h-10 w-60 bg-[#fff]">
                    {optionsYear.map((value) => (
                      <option value={value} key={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='flex items-center justify-center / bg-[#226597] w-40 text-[#fff]   h-10 border-2 / border-[#226597]'>
                <button onSubmit={Search()}  >Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
