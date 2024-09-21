import React, { useContext } from 'react';
import { myContext } from '../ContextAPI/Mycontext';
import { Link } from 'react-router-dom';

const Productdisplay = () => {
    const { filtered } = useContext(myContext);

    return (
        <div className="grid grid-cols-1 p-6 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((product) => (
                <Link to={`/product/${product.id}`}>
                    <div key={product.id} className="border p-4 shadow-md hover:bg-slate-100">
                        
                            <img src={product.image} alt={product.name} className="w-full h-20 object-cover" />
                        
                        
                        <div className="p-4">
                            <div className="flex justify-between mb-3">
                                <p className="font-semibold">{product.name}</p>
                                <p className="font-semibold text-blue-500">#{product.price}</p>
                            </div>
                            <p className="text-gray-500">{product.categories}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Productdisplay;
