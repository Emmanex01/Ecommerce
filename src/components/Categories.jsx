import React, { useContext } from 'react';
import logo from './../assets/DigiBloc.png';
import { IoExitOutline } from "react-icons/io5";
import { myContext } from '../ContextAPI/Mycontext';

const Categories = () => {
  const {setIsMenu, category} = useContext(myContext);
  console.log(category);


  return (
    <div className='fixed top-0 bottom-0 w-2/3 flex flex-col px-3 bg-yellow-600 justify-center gap-4 sm:hidden sm:flex'>
        <div className='flex gap-4 items-center justify-between'>
            <div className='w-40'>
                <img src={logo} alt="Logo" className='w-full'/>
            </div>
            <IoExitOutline className='cursor-pointer' onClick={() => setIsMenu(false)}/>
        </div>
        <div className='cate'>All</div>
      <div className='cate'>Accessories</div>
      <div className='cate'>Andriod</div>
      <div className='cate'>Cellphones</div>
      <div className='cate'>Computer</div>
      <div className='cate'>Furniture</div>
      <div className='cate'>Generators</div>
    </div>
  )
}

export default Categories
