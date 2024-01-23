import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate=useNavigate();
  const [formData,setFormData]=useState({});
  const [errorMessage,seterrorMessage]=useState(null);
  const [loading,setLoading]=useState(false);
  const handleChange = (e) => {
    setFormData({...formData,[e.target.id]:e.target.value})
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!formData.email || !formData.password){
      return seterrorMessage('Please fill out all the fields');
    }
    try {
      setLoading(true);
      seterrorMessage(null);
      const res=await fetch('api/auth/signin',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
      })
      const data=await res.json();
      if(data.success===false){
        return seterrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/');
      }
    } catch (error) {
      seterrorMessage(error.message);
      setLoading(false);
    }
  }
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/*left*/}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Asiri's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can use your email to sign in or the
            google API can be used to sign in
          </p>
        </div>
        {/*right*/}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div >
              <Label value="Your Email" />
              <TextInput type="email" placeholder="name@company.com" id="email" onChange={handleChange} />
            </div>
            <div >
              <Label value="Your Password" />
              <TextInput type="password" placeholder="**********" id="password" onChange={handleChange} />
            </div>
            <Button gradientDuoTone='purpleToPink'type='submit' disabled={loading}>
              {
                loading ?(
                  <>
                  <Spinner size='sm'/>
                  <span className="pl-3">Loading....</span>
                  </>
                ): 'sign in'
              }
            </Button>
          </form>
          <div className=" flex gap-2 text-sm mt-5">
            <span>Dont Have an account?</span>
            <Link to='/sign-up' className=" text-blue-500">
              Sign Up
            </Link>
          </div>
          {
            errorMessage &&(
              <Alert className="mt-5" color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}
