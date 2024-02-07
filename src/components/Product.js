import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs'

const Product = ({ product }) => {
  console.log(product);
  //Destructuration de Produit
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt='image' />
          </div>
          {/* boutons */}
          <div className='absolute top-2 -right-2 p-1 flex flex-col justify-center items-center
            gap-y-1 opacity-0 group-hover:opacity-100 transition-all group-hover:right-3'>
            <button>
              <div className='flex justify-center items-center text-white w-7 h-7 bg-red-500'>
                <BsPlus className='text-3xl' />
              </div>
            </button>
            <Link to={`/product/${id}`} className='w-7 h-7 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      {/* category, title et price */}
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semi-bold'>$ {price}</div>
      </div>
    </div>
  )
};

export default Product;
