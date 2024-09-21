import React, { useContext } from 'react';
import logo from './../assets/DigiBloc.png';
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { myContext } from '../ContextAPI/Mycontext';
import { Link } from 'react-router-dom';

const NavBAr = () => {
    const {all_product, setIsMenu, setSearch, search, getCartTotalQuantity} = useContext(myContext);

        console.log(getCartTotalQuantity())

  return (
    <div className='bg-white flex justify-between items-center h-16 px-6 border-b-2 sticky top-0'>
        <FiMenu className='sm:hidden w-7 mr-3 cursor-pointer' onClick={() => setIsMenu(true)}/>
        <div className='w-40 hidden sm:block'>
            <Link to={`/`} >
                <div className='w-full font-extrabold text-zinc-400 text-2xl'>Digi<span className=' text-blue-700'>Bloc</span></div>
            </Link>
        </div>
        <div className='bg-slate-200 flex items-center h-10 rounded-full px-2'>
            <input 
                type="text" className='w-full bg-transparent outline-none px-4' 
                placeholder='search for gadgets..'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <span>
                <CiSearch className='w-full'/>
            </span>
        </div>
        <div className='flex gap-4 '>
            <span className='w-10 relative'>
                <Link to={'/products/cart'}>
                    <div className='absolute bg-red-500 w-5 rounded-full flex justify-center items-center -top-4 -right-0'>{getCartTotalQuantity()}</div>
                    <IoCartOutline className='w-full'/>
                </Link>
            </span>
            <span className='w-5'>
                < FaRegUser className='w-full'/>
            </span>
           
            
        </div>
    </div>
  )
}

export default NavBAr
