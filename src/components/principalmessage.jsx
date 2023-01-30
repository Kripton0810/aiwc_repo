import React from "react"
import { Card } from "flowbite-react"

export default function PrincipalMessage() {
  return (
    <div className="max-w-lg">
      <Card
        horizontal={true}
        imgSrc="http://aiwcaoe.edu.in/images/index/Principal.jpeg"
        
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          PRINCIPAL MESSAGE
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Dear Parents, Greetings from AIWC family, we at AIWC-AOE, seek to
          achieve excellence in all our pursuits. Bearing in mind the need to
          maintain individual's identity each and every child under our care is
          helped to develop to his/her fullest potential...
        </p>
      </Card>
    </div>
  )
}
