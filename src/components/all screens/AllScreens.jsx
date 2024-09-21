import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IoClose } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { allScreensActive, setScreenName } from '@/redux/slices/allScreensSlice';
import EmailAddressArea from '../email area/EmailAddressArea';

const AllScreens = () => {
    const dispatch = useDispatch();
    const isAllScreenActive = useSelector((state) => state.allScreensSlice.isActive);
    const screenName = useSelector((state) => state.allScreensSlice.activeScreenName);
    const changeAllScreensActive = () => {
        dispatch(allScreensActive());
        dispatch(setScreenName(''));
    };
    
    return (
      <div className={`${isAllScreenActive ? ' ' : ' -translate-x-full'} duration-300 absolute top-0 left-0 w-full h-full bg-white`}>
        <div className='flex flex-col p-1 px-3'>
          <div className='flex items-center justify-between '>
            <div>
               <div className='flex items-center gap-2 text-lg'>
                <IoMdSettings  />
                <span className='text-base font-semibold '>Settings</span>
              </div>
              <p className='text-gray-400 '>{screenName}</p>
            </div>  
            <button 
              className='p-1 text-xl border rounded-md hover:bg-gray-100'
              onClick={()=> {changeAllScreensActive()}}
            >
              <IoClose  />
           </button>
          </div>
          { screenName === 'Email' && <EmailAddressArea /> }
        </div>
      </div>
    )
  }

export default AllScreens