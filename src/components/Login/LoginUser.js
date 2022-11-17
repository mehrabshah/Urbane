import React from 'react'
export default function LoginUser() {
  return (
    <div>
         <div className='h-screen w-screen bg-black'>
        <div className='h-full w-full flex items-center justify-center'>
          <form className='/ w-1/4 h-1/2 flex / flex-col items-center justify-center border-8 / bg-slate-100 '>

            <label class="font-semibold text-xs" for="usernameField">Username or Email</label>
            <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text"/>
              <label class="font-semibold text-xs mt-3" for="passwordField">Password</label>
              <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password"/>
                <button class="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Login</button>
                <div class="flex mt-6 justify-center text-xs">
                  <a class="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a>
                  <span class="mx-2 text-gray-300">/</span>
                  <a class="text-blue-400 hover:text-blue-500" href="#">Sign Up</a>
                </div>
              </form>
            </div>
        </div>      
    </div>
  )
}
