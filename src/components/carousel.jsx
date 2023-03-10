import React from "react"
import { Carousel } from "flowbite-react"
import Cas1 from "../images/cas1.jpeg"
import Cas2 from "../images/cas2.jpeg"
import Cas3 from "../images/cas3.jpeg"
import Cas4 from "../images/cas4.jpeg"
import Cas5 from "../images/cas5.jpeg"

function Carosuel() {
  return (
    <div className=" w-[90%] h-52 sm:h-72 lg:h-80 xl:h-[500px]">
      <Carousel slideInterval={5000}>
        <img src={Cas1} alt="..." className="object-fit h-full w-full" />
        <img src={Cas2} alt="..." className="object-fit h-full w-full" />
        <img src={Cas3} alt="..." className="object-fit h-full w-full" />
        <img src={Cas4} alt="..." className="object-fit h-full w-full" />
        <img src={Cas5} alt="..." className="object-fit h-full w-full" />
      </Carousel>
    </div>
  )
}

export default Carosuel
