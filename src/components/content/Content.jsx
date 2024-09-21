import React from 'react'
import { MdLineWeight } from "react-icons/md";
import { IoStopCircleSharp } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import { RiCloseFill } from "react-icons/ri";
import AddFields from '../add fields/AddFields';
import { FaCloud } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { screenActive } from '@/redux/slices/welcomeScreenSlice';
import { removeField } from '@/redux/slices/addFieldsSlice';
import { allScreensActive, setScreenName } from '@/redux/slices/allScreensSlice';

const Content = () => {
  const dispatch = useDispatch();
  const allFields = useSelector((state) => state.addFieldsSlice.allFields)
  
  const changeWelcomeScreenActive = () => {
    dispatch(screenActive());
  };

  const changeAllScreenActive = () => {
    dispatch(allScreensActive());
  };

  const changeScreenName = (name) => {
    dispatch(setScreenName(name))
  };
  
  const removeFieldById = (index) => {
    dispatch(removeField(index));
  };
  
  return (
    <div className='flex flex-col justify-between h-full '>
      <div className='flex flex-col gap-5 pr-10 '>
        <div className='flex flex-col gap-1 '>
          <div className='flex items-center gap-1 '>
            <MdLineWeight className='text-gray-500'/>
            <h3 className='text-base font-medium '>Steps</h3>
          </div>
          <p className='text-xs text-gray-500 '>The steps users will take to complete the form</p>
        </div>
        <button 
          className='flex items-center px-2 py-3 text-sm duration-200 rounded-md bg-gray-50 hover:bg-gray-100'
          onClick={()=>changeWelcomeScreenActive()}
        >
          <IoStopCircleSharp className='text-gray-500 '/>
          <span className='w-full text-center'>welcome screen</span>
        </button>
        {allFields?.map((field, index) => (
          <button 
            key={index}
            className='flex items-center px-2 py-3 text-sm duration-200 rounded-md bg-gray-50 hover:bg-gray-100'
            onClick={
              ()=>{changeAllScreenActive()
                changeScreenName(field)
              }
            }
          >
            <PiDotsNineBold className='text-gray-500 '/>
            <span className='w-full text-center'>Enter your {field}</span>
            <RiCloseFill 
              className=' hover:cursor-grab'
              onClick={(e)=> {
                e.stopPropagation();
                removeFieldById(index);
              }}
            />
          </button>
        ))}
        <AddFields />
        <hr className='my-5 ' />
        <button className='flex items-center px-2 py-3 text-sm duration-200 rounded-md bg-gray-50 hover:bg-gray-100'>
          <IoStopCircleSharp className='text-gray-500 '/>
          <span className='w-full text-center'>End screen</span>
        </button>
      </div>
      <div className='grid grid-cols-2 gap-2'>
        <button className='flex items-center justify-center gap-1 p-2 text-sm text-white duration-200 bg-black rounded-md hover:opacity-70'>
          <FaCloud />
          <span className='text-xs '>Save & Publish</span>
        </button>
        <button className='flex items-center justify-center gap-1 p-2 text-sm text-red-500 duration-200 rounded-md hover:opacity-70 hover:bg-red-200'>
          <RiDeleteBin5Line />
          <span className='text-xs '>Delete</span>
        </button>
      </div>
    </div>
  )
}

export default Content