import {bannerImgOne,bannerImgTwo,bannerImgThree,bannerImgFour,bannerImgFive,} from "../../assets/index"

import Slider from "react-slick";
import { useState } from "react";


function Banner() {

    const [dotActive,setDotActive] = useState(0)

    const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev,next)=> {
        setDotActive(next)
    },
     appendDots: dots => (
      <div
        style={{
          position:"absolute",
          top: "70%",
          left:"45%",
          transform: "translate(-50%, -%50%)",
          width: "210px"
        }}
      >
        <ul style={{width: "100%", display:"flex", alignItems:"center", justifyContent:"space-between" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={
          i === dotActive ? {
            width: "30px",
          height:"30px",
          borderRadius:"50%",
          background:"#131921",
          color:"white",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          padding:"8px 0",
          cursor:"pointer",
          border:"1px solid #f3a847"
          } :
          {
            width: "30px",
          height:"30px",
          borderRadius:"50%",
          background:"#232f3e",
          color:"white",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          padding:"8px 0",
          cursor:"pointer",
          border:"1px solid #white"
          }
        }
      >
        {i + 1}
      </div>
    ),
    responsive : [
      {
        breakpoint : 576,
        settings:{
          dots:true,
          appendDots: dots => (
      <div
                style={{
          position:"absolute",
          top: "70%",
          left: "0",
          right:"0",
          margin:"0 auto",
          width: "150px"
        }}
      >
        <ul style={{width: "100%", display:"flex", alignItems:"center", justifyContent:"space-between" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={
          i === dotActive ? {
            width: "30px",
          height:"30px",
          borderRadius:"50%",
          background:"#131921",
          color:"white",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          padding:"8px 0",
          cursor:"pointer",
          border:"1px solid #f3a847"
          } :
          {
            width: "30px",
          height:"30px",
          borderRadius:"50%",
          background:"#232f3e",
          color:"white",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          padding:"8px 0",
          cursor:"pointer",
          border:"1px solid #white"
          }
        }
      >
        {i + 1}
      </div>
    ),
    
  }
}
]
};


  return (
    <div className="w-full">
        <div className="w-full h-full relative">
          <Slider {...settings}>
            <div>
                <img src={bannerImgOne} alt="banner1" />
            </div>
            <div>
                <img src={bannerImgTwo} alt="banner1" />
            </div>
            <div>
                <img src={bannerImgThree} alt="banner1" />
            </div>
            <div>
                <img src={bannerImgFour} alt="banner1" />
            </div>
            <div>
                <img src={bannerImgFive} alt="banner1" />
            </div>
          </Slider>
    </div>
    </div>
  )
}

export default Banner