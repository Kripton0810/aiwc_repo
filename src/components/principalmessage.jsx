import React, { useState } from "react"
import principalMessage from "../data/principalLetter.js"
import { Card, Button } from "flowbite-react"
import principalPic from "../images/Principal.jpeg"
import { Edit } from "@mui/icons-material"
import { Modal } from "flowbite-react"

function ReadMore(data) {
  const [click, onClick] = useState(false)
  return (
    <React.Fragment>
      <Button onClick={() => onClick(true)}>
        <Edit />
        Read More{" "}
      </Button>
      <Modal
        dismissible="true"
        show={click}
        size="5xl"
        onClose={() => onClick(false)}
        position="center"
      >
        <Modal.Header>Message from the Principal</Modal.Header>
        <Modal.Body>
          <img
            src={principalPic}
            className="mx-auto"
            alt=""
            width="300px"
            height="300px"
          />
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {data.data.message}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}
export default function PrincipalMessage() {
  return (
    <div className="max-w-lg">
      <Card horizontal={true} imgSrc={principalPic}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          PRINCIPAL MESSAGE
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Dear Parents, Greetings from AIWC family, we at AIWC-AOE, seek to
          achieve excellence in all our pursuits...
        </p>
        <ReadMore data={principalMessage} />
      </Card>
    </div>
  )
}
