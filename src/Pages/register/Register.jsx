


import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";

import toast from "react-hot-toast";

import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [error,setError]=useState(null)
    const{createUser,setUser,user}=useContext(AuthContext)
    const navigate=useNavigate()
          const handleRegister=(e)=>{
             e.preventDefault()
             const  name = e.target.name.value
             const  email = e.target.email.value
             const  password = e.target.password.value
             setError('')
           
             if(password.length<6){
                return setError('Password should be at least 6 characters')
              } 

              createUser(email,password)
              .then((result)=>{
                   toast.success('Successfully Register')
                   updateProfile(result.user,{
                      displayName: name,
                   })
                   .then(result=>{
                    setUser({...user,displayName:name,email:email})
                   
                   })
                   navigate('/')
              })
              .catch(error=>{
                  setError(error.message)
              })
            
           }
     
          


    return (
        <>
       
        <div className="hero min-h-screen md:p-[80px]" >
          <div className="hero-content flex-col lg:flex-row-reverse w-full h-full border-[3px] border-gray-300 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            <div className="text-center lg:text-left">
              <img src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg' className='lg:w-[80%] mx-auto' alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm ">
              <form  onSubmit={handleRegister} className="card-body">
                <h1 className="text-red-500 font-bold text-3xl mx-auto">SignUp</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-red-500 font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                   
                    name="name"
                    className="input input-bordered"
                    required
                  />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-red-500 font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                 
                    name="email"
                    className="input input-bordered"
                    required
                  />
                
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-red-500 font-semibold">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                   
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn bg-red-500 border-none text-black"
                  ></input>
                  <div>
                    <h1 className="text-red-800">{error}</h1>
                  </div>
                </div>
                <p className="text-red-500 mx-auto">
                  Already registered? <Link to="/login"><span className="font-bold">Go to log in</span></Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </>
    );
};

export default Register;