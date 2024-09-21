import React, { useContext, useState } from 'react';
import { myContext } from '../ContextAPI/Mycontext';

const Category = () => {
  const { setCategory, category } = useContext(myContext);
  const [active, setActive] = useState("All");

  const handleCategoryClick = (categoryName) => {
    setActive(categoryName);
    setCategory(categoryName);
  };

  return (
    <div className='hidden sm:flex gap-4 justify-center'>
      <div className={`cate  bg-slate-500 ${active === 'All' ? 'bg-slate-500' : 'bg-white'}`} onClick={() => handleCategoryClick("All")}>All</div>
      <div className={`cate ${active === 'Accessories' ? 'bg-slate-500' : 'bg-white'}`} onClick={() => handleCategoryClick("Accessories")}>Accessories</div>
      <div className={`cate ${active === 'Phones' ? 'bg-slate-500' : 'bg-white'}`} onClick={() => handleCategoryClick("Phones")}>Android</div>
      <div className={`cate ${active === 'Cellphone' ? 'bg-slate-500' : 'bg-white'}`} onClick={() => handleCategoryClick("Cellphone")}>Cellphones</div>
      <div className={`cate ${active === 'Laptop' ? 'bg-slate-500' : 'bg-white'}`} onClick={() => handleCategoryClick("Laptop")}>Computer</div>
      <div className={`cate ${active === 'Furniture' ? 'bg-slate-500' : 'bg-white'}`} onClick={() => handleCategoryClick("Furniture")}>Furniture</div>
      <div className={`cate ${active === 'Generator' ? 'bg-slate-500' : 'bg-white'}`} onClick={() => handleCategoryClick("Generator")}>Generators</div>
    </div>
  );
}

export default Category;
