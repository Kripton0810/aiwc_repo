import React from "react"
import { Timeline, Button, Avatar } from "flowbite-react"
import { CalendarToday, ArrowRight } from "@mui/icons-material"

export default function Achivers() {
  return (
    <div className="flex justify-center">
      <Timeline>
        <Timeline.Item>
          <Timeline.Point icon={CalendarToday} />
          <Timeline.Content>
            <Timeline.Time>February 2022</Timeline.Time>
            <Timeline.Title>
              <React.Fragment>
                <Avatar.Group>
                  <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    rounded={true}
                    stacked={true}
                  />
                  <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    rounded={true}
                    stacked={true}
                  />
                  <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    rounded={true}
                    stacked={true}
                  />
                  <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                    rounded={true}
                    stacked={true}
                  />
                  <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded={true}
                    stacked={true}
                  />
                </Avatar.Group>
              </React.Fragment>
            </Timeline.Title>
            <Timeline.Body>
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </Timeline.Body>
            <Button color="gray">
              Learn More
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={CalendarToday} />
          <Timeline.Content>
            <Timeline.Time>March 2022</Timeline.Time>
            <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
            <Timeline.Body>
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={CalendarToday} />
          <Timeline.Content>
            <Timeline.Time>April 2022</Timeline.Time>
            <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  )
}
