import React from 'react'
import { useSelector } from 'react-redux';

const EmailForm= () => {
  const emailTitle = useSelector((state) => state.emailSlice.emailTitle);
  const emailDescription = useSelector((state) => state.emailSlice.emailDescription);
  
  return (
    <>
    <form className='flex flex-col items-center w-1/2 mt-5 '>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" className='w-full text-white bg-black border-none focus:outline-none' value={emailTitle} />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" className='w-full text-white bg-black border-none focus:outline-none' value={emailDescription} />
      </form>
    </>
  )
}

export default EmailForm