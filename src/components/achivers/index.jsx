import React from "react"
import "./index.css"

export default function AchiversProfileCard(data) {
  return (
    <>
      <div class="card">
        <div class="imgBx">
          <img src={data.data.imageURL} />
        </div>
        <div class="content">
          <div class="details">
            <h2>
              {data.data.nameOfStudent}
              <br />
              <span>Bhai IITn hai aapna</span>
            </h2>
            <div class="data">
              <h3>
                342
                <br />
                <span>Posts</span>
              </h3>
              <h3>
                120k
                <br />
                <span>Followers</span>
              </h3>
              <h3>
                285
                <br />
                <span>Following</span>
              </h3>
            </div>
            <div class="actionBtn">
              <button>Follow</button>
              <button>Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
