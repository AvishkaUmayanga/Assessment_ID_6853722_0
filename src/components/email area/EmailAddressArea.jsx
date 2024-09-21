import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setEmailDescription, setEmailTitle } from '@/redux/slices/emailSlice';
import { Switch } from "@/components/ui/switch"

const EmailAddressArea = () => {
  const [emailError, setEmailError] = useState(null);
  const dispatch = useDispatch();
  const emailTitle = useSelector((state) => state.emailSlice.emailTitle);
  const emailDescription = useSelector((state) => state.emailSlice.emailDescription);
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  const emailTitleChange = (e) => {
    dispatch(setEmailTitle(e.target.value));
  };
  
  const emailDescriptionChange = (e) => {
    dispatch(setEmailDescription(e.target.value));
  };
  
  useEffect(() => {
    if(emailTitle!== '' && !emailPattern.test(emailTitle)){
      setEmailError('Invalid email address');
    }
    else{
      setEmailError(null);
    }
  },[emailTitle]);

  return (
    <>
      <form className='mt-5 '>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={emailTitle} onChange={(e)=>emailTitleChange(e)} />
        { emailError!== null && <p className='-mt-2 text-sm font-medium text-red-500'>{emailError}</p> }
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" value={emailDescription} onChange={(e)=>emailDescriptionChange(e)}/>
      </form>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
      </div>
      <div className='grid grid-cols-2 gap-2 mt-10'>
        <button className='flex items-center justify-center p-2 text-sm text-white duration-200 bg-black rounded-md hover:opacity-70'>
          <span className='text-xs '>Save</span>
        </button>
        <button className='flex items-center justify-center p-2 text-sm text-red-500 duration-200 rounded-md hover:opacity-70 hover:bg-red-200'>
          <span className='text-xs '>Discard</span>
        </button>
      </div>
    </>
    
  )
}

export default EmailAddressArea