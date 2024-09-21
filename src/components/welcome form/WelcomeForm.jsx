import React from 'react'
import { motion} from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux';
import { setDescription, setTitle } from '@/redux/slices/formSlice';

const WelcomeForm = () => {
  const dispatch = useDispatch()
  const formTitle = useSelector((state) => state.formSlice.title);
  const formDescription = useSelector((state) => state.formSlice.description);
  const formBtnText = useSelector((state) => state.formSlice.btnText);

  const formTitleChange = (e) => {
    dispatch(setTitle(e.target.value));
  };
  
  const formDescriptionChange = (e) => {
    dispatch(setDescription(e.target.value));
  };
  return (
    <>
      <form>
      <motion.div 
        whileInView={{y:[100,0], opacity:[0,1]}}
        transition={{ duration: 1}}>
          <input type="text"value={formTitle} onChange={(e)=>formTitleChange(e)}  className='pl-0 text-5xl font-semibold text-white bg-black border-none'/>
      </motion.div>
      <motion.div 
        whileInView={{y:[100,0], opacity:[0,1]}}
        transition={{ duration: 1 , delay:0.30}}>
          <input type="text" value={formDescription} onChange={(e)=> formDescriptionChange(e)} className='pl-0 text-xl font-semibold text-white bg-black border-none' />
      </motion.div>
      <motion.div 
        whileInView={{y:[100,0], opacity:[0,1]}}
        transition={{ duration: 1 , delay:0.60}}>
          <button className='px-4 py-1 mt-2 text-lg bg-white rounded-md'>{formBtnText}</button>
        </motion.div>
      </form>
    </>
  )
}

export default WelcomeForm