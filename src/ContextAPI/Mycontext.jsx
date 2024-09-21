import React, { createContext, useState } from 'react';
import all_product from './../assets/Productsfile/Products'

export const myContext = createContext()

const Mycontext = ({children}) => {
    const [isMenu, setIsMenu] = useState(false);
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);


    const addToCart = (product) => {
      setCart((prevCart) => {
        const DoesProductExist = prevCart.find( item => item.id === product.id); // checks whether the product is in the cart state
        console.log(DoesProductExist)
        if(DoesProductExist){
          // if it exist in cart increment the quantity
          return prevCart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1}: item)
        } else {
          // if it does not exist in cart add it quantity to be 1
          console.log(cart);
          return [...prevCart, {...product, quantity: 1}]
        }
      })
    }

    const removeFromCart= (product) => {
      setCart((prev) => {
        const updatedCart = [...prev]
        console.log(updatedCart);
        const itemIndex = updatedCart.findIndex((e) => e.id === product.id)
        console.log(itemIndex);
        updatedCart.splice(itemIndex, 1)

        return updatedCart
      })

      console.log();

    }
    // Is used to get the total quantities of the product
    const getCartTotalQuantity = () => {
      console.log(cart);
      const Total = cart.reduce((total,item) => total + item.quantity, 0)
      console.log(Total);
      return Total
    }

    const filterData = category === "All" ? all_product : all_product.filter((e) => e.categories === category);
    const filtered = search ? filterData.filter((e) => e.name.toLowerCase().includes(search.toLowerCase())) : filterData;


  return (
    <myContext.Provider value={{filterData, filtered, all_product, isMenu, setIsMenu, setCategory,setSearch, search, addToCart, getCartTotalQuantity, cart, removeFromCart}}>
        {children}
    </myContext.Provider>
  )
}

export default Mycontext
