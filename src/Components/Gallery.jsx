import React from 'react'
import "./Gallery.css"
export default function Gallery() {
  const Data=[
    {
      img:"/assets/Gallery1.png"
    },
    {
      img:"/assets/Gallery2.png"
    },
    {
      img:"/assets/Gallery3.png"
    }
  ]
  return (
    <>
    <section className="Gallery">
      <h1>Gallery</h1>
      <div className="GalleryGrid">
        {Data.map((item)=>(
          <div className="GalleryCard" key={item.img}>
          <img src={item.img}  className='GalleryImg'/>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}
