import React, { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import { data } from "./data"
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core"
import "./index.css"
import { useOutletContext } from "react-router-dom"

SwiperCore.use([EffectCoverflow, Pagination])
function SchoolSingularity() {
  const setShowProgress = useOutletContext()
  useEffect(() => {
    return () => {
      setShowProgress(true)
    }
  })
  return (
    <div onLoad={() => setShowProgress(false)}>
      <section id="threeDCarasoul" className="main-swiper-wrapper p-0">
        <div className="backdrop-blur-md w-full h-full">
          <Swiper
            effect={"coverflow"}
            grabCursor="true"
            centeredSlides="true"
            slidesPerView="auto"
            coverflowEffect={{
              stretch: 0,
              depth: 100,
              modifier: 6,
              slideShadows: true,
            }}
          >
            {data.map((item, key) => (
              <SwiperSlide key={key}>
                <img src={item.imageURL} alt={item.title} />
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="quote-parent">
          <div className="quote n-box1 flex-with-center">
            <h1>Quote?!</h1>
            <div className="quote-content">
              <p>“ Knowledge is power.” </p>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  )
}
export default SchoolSingularity
