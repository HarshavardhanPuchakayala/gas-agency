import React from 'react'
import "./Products.css"
export default function Products() {
    const Data=[
        {
            id:1,
            name:"small cylinder",
            img:"/assets/Product1.png"
        },
        {
            id:2,
            name:"mini cylinder",
            img:"/assets/Product2.png"
        },
        {
            id:3,
            name:"LPG cylinder",
            img:"/assets/Product3.png"
        }
    ]
  return (
    <>
    <section className="Products">
      <h1>Products</h1>
        <div className='ProductsGrid'>
           {Data.map((item)=>(
             <div className='ProductCard' key={item.id}>
             <img src={item.img} alt={item.name} />
             <h5>{item.name}</h5>
             <a href="#product1">Add to cart</a>
         </div>
           ))}
        </div>
    </section>
    </>
  )
}
