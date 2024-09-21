import React, { useContext } from 'react';
import digi from './../assets/DigiBloc.png';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { myContext } from '../ContextAPI/Mycontext';
import { Link } from 'react-router-dom';


const ProductDescription = () => {

  const {addToCart, filtered} = useContext(myContext);
  const {id} = useParams();

  const product = filtered.find(item => item.id == id);


  if (!product) {
    return <div>Product Not Found!</div>
  }

  return (
    <div className='grid grid-cols-1 px-6 md:grid-cols-2 gap-4'>
        <Link className='sm:hidden' to={'/'}>
            <div className='font-semibold py-4'>Back</div>
        </Link>
        <div className='grid grid-cols-1 mb-6 md:grid-cols-3 md:gap-2'>
            <div className='md:col-span-2'>
                <img src={product.image} alt="" className='w-full md:h-full object-cover'/>
            </div>
            <div className='grid grid-cols-4 gap-2 mt-2 sm:grid-cols-5 md:grid-cols-1'>
                <img src={product.image} alt="" className='h-16 object-cover'/>
                <img src={product.image} alt="" className='h-16 object-cover'/>
                <img src={product.image} alt="" className='h-16 object-cover'/>
                <img src={product.image} alt="" className='h-16 object-cover'/>
                <img src={product.image} alt="" className='h-16 object-cover'/>
            </div> 
        </div>
      <div>
        <h1 className='font-semibold text-3xl mb-5'>{product.name}</h1>
        <div className='flex mb-4'>
            <FaStar className='text-yellow-400'/>
            <FaStar className='text-yellow-400'/>
            <FaStar className='text-yellow-400'/>
            <FaStar className='text-yellow-400'/>
            <FaStarHalfAlt className='text-yellow-400'/>
        </div>
        <div className='mb-4'>#{product.price}</div>
        <div className='mb-4'>It enables navigation to product pages where detailed information can be fetched based on the product's unique ID (captured from the URL).</div>
        <div className='font-medium mb-3 '>Select Size</div>
        <div className='flex gap-2 mb-5'>
            <div className='btn'>S</div>
            <div className='btn'>M</div>
            <div className='btn'>L</div>
            <div className='btn'>XL</div>
            <div className='btn'>XXL</div>
        </div>
        <button className='bg-yellow-600 px-3 py-2 rounded-sm' onClick={() => addToCart(product)}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductDescription
