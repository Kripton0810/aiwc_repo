import React, { useState } from "react"
import news from "../data/newstopic.js"
import { Card, Button } from "flowbite-react"
import { Modal } from "flowbite-react"
import Marquee from "react-fast-marquee"

function ReadMore(data) {
  const [click, onClick] = useState(false)
  return (
    <React.Fragment>
      <Button onClick={() => onClick(true)}>Toggle modal</Button>
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
  return (
    <Card href="#">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {data.value.heading}
      </h5>
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
  return (
    <>
      <div className="w-[95%] m-5 overflow-y-auto border-black border-4 h-[500px] xl:m-0 ">
        <Marquee pauseOnHover={true} gradient={false} speed={100}>
          <NewsList />
        </Marquee>
      </div>
    </>
  )
}
export default NoticeBoard
