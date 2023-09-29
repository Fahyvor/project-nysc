import React from 'react';
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        navigate('/');
    }
  return (
    <div className="text-center flex justify-center flex-col pt-5">
    <div className="login-header mt-5">
        <h1 className="mt-5 font-bold text-green-950">REGISTER</h1>
    </div>

    <form className="flex flex-col w-full items-center 
    pt-5 gap-5" onSubmit={handleRegister}>
        <input type="text" placeholder="First Name"
        className="w-1/3 max-sm:w-3/4 p-3 bg-slate-200" required />

        <input type="text" placeholder="Middle Name"
        className="w-1/3 max-sm:w-3/4 p-3 bg-slate-200" required />

        <input type="text" placeholder="Last Name"
        className="w-1/3 max-sm:w-3/4 p-3 bg-slate-200" required />

        <input type="email" placeholder="Email"
        className="w-1/3 max-sm:w-3/4 p-3 bg-slate-200" required />

        <input type="text" placeholder="Phone"
        className="w-1/3 max-sm:w-3/4 p-3 bg-slate-200" required />

        <input type="password" placeholder="Password"
        className="w-1/3 max-sm:w-3/4 p-3 bg-slate-200" required />
        <button type="submit"
        className="mt-5 pb-5 bg-green-950 flex
        justify-center text-slate-50 items-center p-2
        w-1/4 max-sm:w-2/3 rounded-xl
        ">Log In</button>
    </form>

    <div className="form-footer mt-5 pt-5">
        <p>Already Have an Account? <a href="/register">Login</a></p>
    </div>
</div>
  )
}

export default Register