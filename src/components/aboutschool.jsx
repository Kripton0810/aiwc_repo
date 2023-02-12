import React from "react"
import { Card } from "flowbite-react"

export default function AboutSchool() {
  return (
    <div className="max-w-lg">
      <Card
        horizontal="true"
        imgSrc={process.env.REACT_APP_BASE_IMAGE_URL + "mainbuilding.jpg"}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          About School
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          AIWC - Academy of Excellence came into its existence on 3rd July 2003.
          Initially the school was a Primary level Hindi medium school...
        </p>
      </Card>
    </div>
  )
}
