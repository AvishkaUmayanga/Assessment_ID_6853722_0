import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog"
import fieldsData from '@/data/fieldsData'
import { FiPlus } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { setField } from '@/redux/slices/addFieldsSlice';

const AddFields = () => {
  const dispatch = useDispatch();
  
  const addFieldsToContent = (field) => {
    dispatch(setField(field));
  };
  
  return (
    <div>
      <Dialog>
        <DialogTrigger className='flex items-center gap-2 p-2 text-xs font-medium duration-200 border rounded-lg hover:bg-gray-100'>
          <FiPlus />
          <span>Add field</span>
        </DialogTrigger>
          <DialogContent className='min-w-[720px]'>
            <DialogHeader>
              <DialogTitle>Add field</DialogTitle>
              <DialogDescription>
                <div className='grid grid-cols-4 gap-5 mt-8 '>
                    {fieldsData?.map((data, index) => (
                      <DialogClose asChild key={index} >
                     <button 
                       className='flex items-center gap-2 group'
                       onClick={()=> addFieldsToContent(data.fieldName)}
                     >
                        <data.fieldIcon/>
                        <span className='text-sm duration-100 group-hover:text-black group-hover:scale-105 group-hover:font-medium'>{data.fieldName}</span>
                     </button>
                     </DialogClose>
                    ))}
                </div>
             </DialogDescription>
           </DialogHeader>
       </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddFields