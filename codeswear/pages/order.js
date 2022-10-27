import React from 'react'

const Order = ({cart,addToCart,removeFromCart,clearCart,subTotal}) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-7 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">CODES WEAR</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #89777</h1>
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Your order have been successfully placed</h2>
        <div className="flex mb-4 text-center">
          <a className="flex-grow text-indigo-500  py-2 text-lg px-1">Item Description</a>
          <a className="flex-grow  py-2 text-lg px-1">Quantity</a>
          <a className="flex-grow  py-2 text-lg px-1">Item Total</a>
        </div>
        <div className="flex border-t border-gray-200 py-2 m-auto">
          <span className="text-gray-500">Wear the Code(XL/Black)</span>
          <span className="m-auto text-gray-900 text-center">1</span>
          <span className="m-auto text-gray-900 text-center">₹499</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Wear the Code(XL/Black)</span>
          <span className="m-auto text-gray-900">1</span>
          <span className="m-auto text-gray-900">₹499</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Wear the Code(XL/Black)</span>
          <span className="m-auto text-gray-900">1</span>
          <span className="m-auto text-gray-900">₹499</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">SubTotal: {subTotal}</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track Order</button>
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
  )
}

export default Order