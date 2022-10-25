import React,{useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart,AiFillCloseCircle,AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';

const Navbar = () => {

  const ref = useRef();

  const toggleCart =()=>{
    console.log(ref);
    if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    }  
    else if(!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full')
    }
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md">
        <div className="logo mx-5">
          <Link href={'/'}><a><Image width={200} height={40} src="/logo.webp" alt=''/></a></Link>
        </div>
        <div className="nav">
          <ul className="flex items-center space-x-6 font-bold md:text-md">
            <Link href={'/tshirts'}><a><li>Tshirts</li></a></Link>
            <Link href={'/hoodies'}><a><li>Hoodies</li></a></Link>
            <Link href={'/stickers'}><a><li>Stickers</li></a></Link>
            <Link href={'/mugs'}><a><li>Mugs</li></a></Link>
          </ul>
        </div>
        <div ref={ref} onClick={toggleCart} className="cart absolute right-0 top-4 mx-5">
          <AiOutlineShoppingCart className='text-xl md:text-3xl'/>
        </div>

        <div ref={ref} className="w-72 h-full fixed sidebar  top-0 right-0 p-10 bg-gray-300 z-20 transform transition-transform translate-x-full ">
          <h2 className="font-bold text-xl">Shopping Cart</h2>
          <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl"><AiFillCloseCircle/></span>
          <ol className='list-decimal font-semibold'>
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold">Tshirt - Wear the Code</div>
                <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                  <AiFillMinusCircle className='cursor-pointer'/> <span className='mx-2 text-sm'>1</span> <AiFillPlusCircle className='cursor-pointer'/>
                </div>
              </div>
            </li>
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold">Tshirt - Wear the Code</div>
                <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                  <AiFillMinusCircle className='cursor-pointer'/> <span className='mx-2 text-sm'>1</span> <AiFillPlusCircle className='cursor-pointer'/>
                </div>
              </div>
            </li>
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold">Tshirt - Wear the Code</div>
                <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                  <AiFillMinusCircle className='cursor-pointer'/> <span className='mx-2 text-sm'>1</span> <AiFillPlusCircle className='cursor-pointer'/>
                </div>
              </div>
            </li>
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold">Tshirt - Wear the Code</div>
                <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                  <AiFillMinusCircle className='cursor-pointer'/> <span className='mx-2 text-sm'>1</span> <AiFillPlusCircle className='cursor-pointer'/>
                </div>
              </div>
            </li>
          </ol>
          <div className="flex">
            <button className="flex mr-2 mt-16 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none items-center hover:bg-indigo-600 rounded text-sm"> 
                <BsFillBagCheckFill className='m-1'/>Checkout
              </button>
              <button className="flex mr-2 mt-16 text-white bg-yellow-400 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-sm">Clear cart</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar