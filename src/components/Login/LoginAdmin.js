import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function LoginAdmin() {
  const [state , setState] = useState({
    email : "",
    password : ""
  })
  const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
}



  return (
    <>
      <div className='h-screen w-screen bg-[#113F67]'>
        <div className='h-full w-full flex items-center justify-center'>
          <form className='/ w-1/4 h-1/2 flex / flex-col items-center justify-center border-8 border-black bg-[#87C0CD]'>

            <label className="font-semibold text-xs" for="usernameField">Username or Email</label>
            <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" value={state.email}  onChange={handleChange}/>
              <label className="font-semibold text-xs mt-3" for="passwordField" >Password</label>
              <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" value={state.password} onChange={handleChange} />
                <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"> <Link to="/verify" className='/ cursor-pointer'>Login</Link></button>
                <div className="flex mt-6 justify-center text-xs">
                  <a className="text-black hover:text-blue-500" href="#">Forgot Password</a>
                  <span className="mx-2 text-gray-300">/</span>
                  <a className="text-black hover:text-blue-500" href="#">Sign Up</a>
                </div>
              </form>
            </div>
        </div>
      </>
      )
}
