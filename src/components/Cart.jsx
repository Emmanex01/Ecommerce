import React, { useContext } from 'react';
import { myContext } from '../ContextAPI/Mycontext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cart, removeFromCart} = useContext(myContext);
    
  return (
    <div className='px-6'>
        <Link to={'/'}>
            <div className='font-semibold py-4 sm:hidden'>Back</div>
        </Link>
    <table className='w-full mt-4'>
        <tr className=' w-full py-20 border-b-2'>
            <th className='Thead'>Product</th>
            <th className='Thead hidden sm:block'>Title</th>
            <th className='Thead'>Quantity</th>
            <th className='Thead'>Total</th>
            <th className='Thead'>Remove</th>
        </tr>
        {cart.map((item) => (
            <tr key={item.id} className='py-10'>
                <td className='Thead'><img src={item.image} alt="" className='w-16 h-16 object-cover'/></td>
                <td className='Thead hidden sm:block'>{item.name}</td>
                <td className='Thead'>
                    <div className='bg-slate-200 w-7 text-center'>
                        {item.quantity}
                    </div>
                </td>
                <td className='Thead'>
                    #{item.quantity * item.price}
                </td>
                <td className='Thead' onClick={() => removeFromCart(item)}>Remove</td>
            </tr>
        ))}
    </table>
    
    </div>
  )
}

export default Cart
