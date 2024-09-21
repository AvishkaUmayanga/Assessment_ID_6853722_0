import React from 'react'
import { useSelector } from 'react-redux';
import WelcomeForm from '../welcome form/WelcomeForm';
import EmailForm from '../email form/EmailForm';

const Dashboard = () => {
  const screenName = useSelector((state) => state.allScreensSlice.activeScreenName);
  
  return (
    <div className='flex items-center justify-center flex-1 p-5 bg-black rounded-2xl'>
      { screenName === 'Email' ? <EmailForm /> : <WelcomeForm />}
    </div>
  )
}

export default Dashboard