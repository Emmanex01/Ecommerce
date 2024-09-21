import React, { useContext } from 'react';
import Categories from './Categories';
import { myContext } from '../ContextAPI/Mycontext';
import Productdisplay from './Productdisplay';
import Category from './Category';

const Maincontent = () => {
  const {isMenu} = useContext(myContext);

  return (
    <div className='py-6'>
      {isMenu ? <Categories/>: <></>}
      <Category/>
      <Productdisplay/>
    </div>
  )
}

export default Maincontent

