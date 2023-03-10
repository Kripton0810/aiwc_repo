import React, { useState, useEffect } from "react"
import news from "../data/newstopic.js"
import { Card, Button } from "flowbite-react"
import { Modal } from "flowbite-react"
import NewBlick from "../images/newblink.gif"

function ReadMore(data) {
  const [click, onClick] = useState(false)
  return (
    <React.Fragment>
      <Button onClick={() => onClick(true)}>Read More </Button>
      <Modal
        dismissible="true"
        show={click}
        onClose={() => onClick(false)}
        position="center"
      >
        <Modal.Header>{data.data.heading}</Modal.Header>
        <Modal.Body>
          <img src={data.data.imageurl} className="mx-auto" alt="" />
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {data.data.desc}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}
function NewsItem(data) {
  let blinker
  if (data.value.isNew) {
    blinker = <img src={NewBlick} alt="Latest news" width="50px" />
  } else {
    blinker = ""
  }
  return (
    <Card href="#" className="my-5">
      <div className="flex flex-row justify-between items-center">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.value.heading}
        </h5>
        {blinker}
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {data.value.desc.length > 150
          ? data.value.desc.substring(0, 149) + "..."
          : data.value.desc}
      </p>
      <ReadMore data={data.value} />
    </Card>
  )
}

function NewsList() {
  return news.map((info, index) => (
    <NewsItem key={index.toString()} value={info} />
  ))
}

function NoticeBoard() {
  let hold = false

  const handelMouseOver = () => {
    hold = true
  }
  const handelMouseLeave = () => {
    hold = false
  }
  useEffect(() => {
    const box = document.getElementById("noticeBox")
    const element = document.getElementById("newstape")
    let top = 0
    setInterval(() => {
      if (top < -(box.clientHeight * 2) - 100) {
        top = box.clientHeight
      }

      element.style.top = `${top}px`
      if (!hold) {
        top--
      }
      return () => {
        box.removeEventListener("mouseover")
      }
    }, 15)
  }, [hold])
  return (
    <>
      <div
        className="w-[95%] h-[300px] text-sm rounded-xl box mx-5 overflow-y-hidden border-2 border-black  xl:mx-2 xl:p-2  xl:w-1/2 xl:h-[500px] xl:text-lg"
        id="noticeBox"
        onMouseOverCapture={handelMouseOver}
        onMouseLeave={handelMouseLeave}
      >
        <div id="newstape" className="relative top-10 flex-col ">
          <NewsList />
        </div>
      </div>
    </>
  )
}
export default NoticeBoard
