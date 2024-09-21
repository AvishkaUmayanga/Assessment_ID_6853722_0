import React from 'react'
import { BsBoxFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../redux/slices/buttonSlice';
import Content from '../content/Content';
import ScreenSetting from '../screen settings/ScreenSetting';
import AllScreens from '../all screens/AllScreens';

const SideBar = () => {
  const buttonData = [
    {name: 'content'}, 
    {name: 'design'}, 
    {name: 'share'}, 
    {name: 'replies'}
  ]

  const activeTab = useSelector((state) => state.buttonSlice.activeBtn);
  const isScreenSettingActive = useSelector((state) => state.welcomeScreenSlice.isActive);
  const dispatch = useDispatch();

  const changeActive = (buttonText) => {
    dispatch(setActive(buttonText))
  };

  return (
    <div className='relative flex flex-col w-1/5 h-full gap-5 p-2 overflow-hidden '>
      <div className='flex items-center justify-between '>
        <div className='flex gap-2 text-xs '>
          <button className='flex items-center gap-1 font-semibold text-gray-500 hover:text-blue-500'>
            <BsBoxFill />
            Dashboard
          </button>
          <p>&gt;</p>
          <p>page</p>
        </div>
        <button className='p-1 text-xl rounded-md hover:bg-gray-100'>
          <IoMdSettings  />
        </button>
      </div>
      <div className='flex justify-between p-1 text-sm bg-gray-100 rounded-md '>
        { buttonData.map((data, index) => (
            <button 
              key={index}
              className={`${activeTab === data.name ? 'bg-white' : ''} 
               hover:bg-gray-200 py-1 px-3 rounded-md duration-200 capitalize`}
               onClick={()=> changeActive(data.name)}
            >
              {data.name}
        </button>
        ))}
      </div>
      <div className='h-full mt-5'>
        {activeTab === 'content' && <Content />}
      </div>
      <ScreenSetting />
      <AllScreens />
    </div>
  )
}

export default SideBar