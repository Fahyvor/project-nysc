import React from 'react';
import './homepage.css'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {

  const navigate = useNavigate();

  return (
    <div className='homepage-body container-fluid'>
        <div className='homepage-shadow pt-5'>
            <div className='body-header text-slate-50 mt-5
            text-center flex flex-col items-center pt-5 gap-4'>
              <h2 className='text-4xl max-sm:text-2xl font-bold mt-5 tracking-wider'>
                WELCOME TO NYSC PORTAL</h2>
              <p className='w-1/3 max-sm:w-5/6'>Youths Obey the clarion call, let us lift our
                nation high Under the sun or in the rain, with dedication
                and selflessness Nigeria's ours, Nigeria we serve
              </p>
            </div>

            <div className='body-buttons flex justify-center mt-5 pt-5 gap-5'>
              <div className='login p-2 w-1/6 max-sm:w-1/3 flex justify-center 
              rounded-xl bg-slate-50 text-green-950'>
                <a href='/login' onClick={() => navigate('/login')}>Log In</a>
              </div>

              <div className='register w-1/6 max-sm:w-1/3 flex justify-center 
              items-center rounded-xl text-slate-50'>
                <a href='/register' onClick={() => navigate('/register')}>Register</a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage