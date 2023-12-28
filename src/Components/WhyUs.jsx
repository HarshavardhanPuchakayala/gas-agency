import React from 'react'
import "./WhyUs.css"
export default function WhyUs() {
    const Data=[
        {
            id:1,
            img:"/assets/GasCylinder.png",
            name:"Cost Friendly"
        },
        {
            id:2,
            img:"/assets/moneyBag.png",
            name:"Safe and strong cylinders"
        },
        {
            id:3,
            img:"/assets/gear.png",
            name:"Quick gas connection"
        },
        {
            id:4,
            img:"/assets/truck.png",
            name:"Delivery at your doorstep"
        },
        {
            id:5,
            img:"/assets/insurance.png",
            name:"safety and security"
        },
        {
            id:4,
            img:"/assets/trust.png",
            name:"Customer friendly"
        }
    ]
  return (
    <>
    <section className="whyus">
        <h1>Why us..?</h1>
        <div className="WhyusGrid">
            {
                Data.map((item)=>(
                    <div className="WhyusCard" key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                ))
            }
            
        </div>
    </section>
    </>
  )
}
