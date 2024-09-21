import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { IoMdSettings } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { screenActive } from '@/redux/slices/welcomeScreenSlice';
import { setBtnText, setDescription, setTitle } from '@/redux/slices/formSlice';
import { GoUpload } from "react-icons/go";


const ScreenSetting = () => {
  const dispatch = useDispatch();
  const isScreenSettingActive = useSelector((state) => state.welcomeScreenSlice.isActive);
  const formTitle = useSelector((state) => state.formSlice.title);
  const formDescription = useSelector((state) => state.formSlice.description);
  const formBtnText = useSelector((state) => state.formSlice.btnText);
  
  const changeWelcomeScreenActive = () => {
    dispatch(screenActive());
  };

  const formTitleChange = (e) => {
    dispatch(setTitle(e.target.value))
  };

  const formDescriptionChange = (e) => {
    dispatch(setDescription(e.target.value))
  };

  const formBtnTextChange = (e) => {
    dispatch(setBtnText(e.target.value))
  };
  
  return (
    <div className={`${isScreenSettingActive ? ' ' : ' -translate-x-full'} duration-300 absolute top-0 left-0 w-full h-full bg-white`}>
      <div className='flex flex-col p-1 px-3'>
        <div className='flex items-center justify-between '>
          <div className='flex items-center gap-2 text-lg'>
            <IoMdSettings  />
            <span className='text-base font-semibold '>Settings</span>
           </div>
          <button 
            className='p-1 text-xl border rounded-md hover:bg-gray-100'
            onClick={()=> changeWelcomeScreenActive()}
          >
            <IoClose  />
          </button>
        </div>
        <form className='mt-5 '>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" value={formTitle} onChange={(e)=>formTitleChange(e)} />
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" value={formDescription} onChange={(e)=>formDescriptionChange(e)}/>
          <label htmlFor="btnText">Button Text</label>
          <input type="text" name="btnText" id="btnText" value={formBtnText} onChange={(e)=>formBtnTextChange(e)}/>
          <button className='flex items-center gap-1 px-2 py-1 mt-5 border rounded-md hover:border-black'>
            <GoUpload />
            <span>Upload</span>
          </button>
        </form>
        <div className='grid grid-cols-2 gap-2 mt-10'>
          <button className='flex items-center justify-center p-2 text-sm text-white duration-200 bg-black rounded-md hover:opacity-70'>
            <span className='text-xs '>Save</span>
          </button>
          <button className='flex items-center justify-center p-2 text-sm text-red-500 duration-200 rounded-md hover:opacity-70 hover:bg-red-200'>
            <span className='text-xs '>Discard</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScreenSetting