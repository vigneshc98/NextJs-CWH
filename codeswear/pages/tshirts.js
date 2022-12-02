import mongoose from 'mongoose'
import Link from 'next/link'
import React from 'react'
import Product from '../models/Product'

const Tshirts = ({products}) => {
  console.log(products);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-11 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).map((item)=>{
              // {console.log(item)}   Wear the Code Premium shirts,   Wear the Code2,  Wear the Code3
              return <Link key={item._id} href={`/product/${products[item].slug}`}>
              <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-2">
              <a className="block relative rounded overflow-hidden">
                <img alt="ecommerce" className="m-auto h-[30vh] md:h-[35vh] block" src={products[item].img} />
              </a>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                <p className="mt-1">₹{products[item].price}</p>
                <div className='flex'>
                   {products[item].size.map((size, index)=> <p key={index} className="mt-1 mr-2 border border-gray-300 px-1">{size}</p>)}
                </div>
              </div>
            </div>
            </Link>
            })}
          </div>
        </div>
        </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if(!mongoose.connect(process.env.MONGO_URI)){
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({category:'tshirts'});
  let tshirts = {};
  for(let item of products){
    if(item.title in tshirts){
      if(item.availableQty > 0 && !tshirts[item.title].color.includes(item.color)){
        tshirts[item.title].color.push(item.color)
      }
      if(item.availableQty > 0 && !tshirts[item.title].size.includes(item.size)){
          tshirts[item.title].size.push(item.size)
      }
    }else{
      tshirts[item.title] = JSON.parse(JSON.stringify(item));
      tshirts[item.title].color = [tshirts[item.title].color];
      tshirts[item.title].size = [tshirts[item.title].size];
    }
  }
  return {
    props: {products: JSON.parse(JSON.stringify(tshirts))},
  }
}

export default Tshirts