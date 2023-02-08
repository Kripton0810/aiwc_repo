import React from "react"
import ImageGallery from "react-image-gallery"
import Image1 from "../../images/Bio Lab.jpg"
import Image2 from "../../images/Hall.jpg"
import Image3 from "../../images/Playground.jpg"

function SchoolSingularity() {
  const images = [
    {
      original: Image1,
      thumbnail: Image1,
    },
    {
      original: Image2,
      thumbnail: Image2,
    },
    {
      original: Image3,
      thumbnail: Image3,
      description: "Alpha beta gama",
    },
  ]

  return (
    <div>
      <ImageGallery items={images} autoPlay="true" />
    </div>
  )
}
export default SchoolSingularity
