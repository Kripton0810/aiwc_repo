import React from "react"
import { Sidebar } from "flowbite-react"
import { PieChart,Inbox,Person,ShoppingBag,TableChart,JoinRight } from "@mui/icons-material"

function SchoolSingularity() {
  return (
    <div className="w-fit">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={PieChart}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={PieChart}
              label="Pro"
              labelColor="alternative"
            >
              Kanban
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={Inbox} label="3">
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={Person}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={ShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={JoinRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={TableChart}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  )
}
export default SchoolSingularity