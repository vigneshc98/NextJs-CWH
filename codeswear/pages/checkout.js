import React,{useEffect} from 'react'
import {AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';


const Checkout = ({cart,addToCart,removeFromCart,clearCart,subTotal}) => {

  return (
    <div className='container m-auto'>
      <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
      <div className='md:px-28 px-7'>
          <h2 className='font-bold text-xl'>1.Delivery Details</h2>
          <div className="mx-auto flex my-2">
            <div className="px-2 w-1/2">
              <div className="mb-2">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="email" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="mb-2">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
          </div>
          <div className="px-2 w-full">
              <div className="mb-2">
                <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                <textarea name="address" id="address" cols="30" rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
              </div>
          </div>
          <div className="mx-auto flex my-2">
            <div className="px-2 w-1/2">
              <div className="mb-2">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                <input type="email" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="mb-2">
                <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                <input type="email" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
          </div>
          <div className="mx-auto flex my-2">
            <div className="px-2 w-1/2">
              <div className="mb-2">
                <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                <input type="email" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="mb-2">
                <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">PinCode</label>
                <input type="email" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
          </div>

          <h2 className='font-bold text-xl'>1.Review Cart Items</h2>
          <div className=" h-full  sidebar p-10 bg-gray-300 z-20 ">
          <h2 className="font-bold text-xl">Shopping Cart</h2>
          <ol className='list-decimal font-semibold'>
            {Object.keys(cart).length ==0 && <div className='my-7'>Your Cart is Empty!</div>}
            {Object.keys(cart).map((item)=>{ 
              return <li key={item}>
              <div className="item flex my-5">
                <div className=" font-semibold">{cart[item].name}</div>
                <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                  <AiFillMinusCircle onClick={()=>{removeFromCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant)}}  className='cursor-pointer'/> <span className='mx-2 text-sm'>{cart[item].qty}</span> <AiFillPlusCircle onClick={()=>{addToCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant)}}  className='cursor-pointer'/>
                </div>
              </div>
            </li>
            })
            }
          </ol>
          <span className="font-bold mt-11 flex justify-end">SubTotal: ₹{subTotal}</span>
        </div>
        <div className="flex my-2 justify-end">
            <button className="flex my-0 mr-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none items-center hover:bg-indigo-600 rounded text-sm"> 
                Pay ₹{subTotal}</button>
          </div>
      </div>
    </div>
  )
}

export default Checkout