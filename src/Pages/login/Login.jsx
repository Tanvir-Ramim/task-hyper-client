import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const{signInUser}=useContext(AuthContext)
  const [error, setError] = useState(null)
  const navigate=useNavigate()
  const location=useLocation()
  const from=location.state?.from?.pathname || '/'
  const handleLogIn=(e)=>{
    e.preventDefault()
    const form=e.target 
    const email=form.email.value 
    const password=form.password.value 

    setError('')
    signInUser(email,password)
    .then(()=>{
       toast.success('Successfully Login')
         navigate(from)
    })
    .catch(error=>{
        setError(error.message)
    })
}

    return (
        <div>
        <Helmet>
        <title>Task | LogIn</title>
      </Helmet>
<div className="hero min-h-screen md:p-[80px] ">
  <div className="hero-content flex-col lg:flex-row w-full h-full border-[3px] border-gray-300 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
    <div className="text-center lg:text-left">
     <img src='https://media.istockphoto.com/id/1318100811/vector/login-screen-icon-on-white-background.jpg?s=612x612&w=0&k=20&c=zOPj77UDogeF8dO1vs5kAS3NE2GgHgazDCJWxR1FGUw=' className='lg:w-[80%] mx-auto' alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm ">
      <form  onSubmit={handleLogIn} className="card-body text-red-500">
     
        <h1 className="text-red-500 font-bold text-3xl mx-auto">LOGIN</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-500 font-semibold">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-500 font-semibold">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="mb-6 input input-bordered" required />
        </div>
        <div><input
                    type="submit"
                    className="btn w-full bg-red-500 border-none text-black"
                  ></input></div>
          <div className='text-red-500'>{error}</div>
        <p className="text-red-500 mx-auto">New here? <Link to="/register"><span className="font-bold">Create a new account</span></Link></p>
        
       
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login