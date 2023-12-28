import React from 'react'
import "./Services.css"
export default function Services() {
  const Data=[
    {
      id:1,
      img:"/assets/HomeCylinder.jpg",
      name:"LPG Cylinder",
      desc:"Book top class regular size cylinders of accurate weight & superior quality for your household needs."
    },
    {
      id:2,
      img:"/assets/GasConnectionForOffice.jpg",
      name:"Gas Connection for Office",
      desc:"You can also register with us and start with a new gas connection for your corporate offices."
    },
    {
      id:3,
      img:"/assets/Repair.jpg",
      name:"Repairing",
      desc:"We are engaged in offering excellent and prompt repairing services for gas stoves."
    },
    {
      id:4,
      img:"/assets/Gasmaintenance.jpg",
      name:"Maintenance",
      desc:"We provide the best maintenance services for gas stoves for avoiding the possible damage beforehand."
    },
    {
      id:5,
      img:"/assets/GasPipeline.jpeg",
      name:"Kitchen Gas Pipeline",
      desc:"We provide our customers with the premium quality commercial kitchen LPG pipeline installation service."
    },
    {
      id:5,
      img:"/assets/GasFilling.jpeg",
      name:"Industrial Gas Pipeline",
      desc:"We are an acclaimed firm involved in the provision of premum quality industrial gas pipeline installation"
    }
  ]
  return (
  <>
  <h1 className="ServicesHeading">
    Services
  </h1>
  <div className="ServicesGrid">
    {Data.map((item)=>(
      <div className="ServiceCard" key={item.id}>
      <img src={item.img} alt={item.name} />
      <div className="ServicesContent">
        <h1>{item.name}</h1>
        <p>{item.desc}</p>
        <a href="">Enquire Now</a>
      </div>
      </div>
    ))
    }
  </div>
  </>
  )
}
