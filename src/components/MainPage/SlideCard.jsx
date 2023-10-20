import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value) => {
          return (
            <div key={value.id}>
              <div className='box d_flex top j' >
                <div className='left'>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className='btn-primary'>Visitar Coleção</button>
                </div>
                <div className='right'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  )
}

export default SlideCard
