import './index.scss'
import React, { FC, useState, useEffect } from 'react'

import {
  Route,
  Routes,
  Outlet,
  useNavigate,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom'

import { MainButton, useShowPopup } from '@vkruglikov/react-telegram-web-app'

export const Bottom: FC = () => {
  return (
    <>
      <div>233333</div>
    </>
  )
}

const Home = () => {
  const showPopup = useShowPopup()

  return (
    <div className="all">
      <div>
        <Outlet />
      </div>
      111111
      <MainButton
        text="Sxxxxxxxx"
        onClick={() => {
          showPopup({
            message: "Hello, I'am showPopup handle",
          })
        }}
      />
      {/* <div className="home">
        <Bottom />
      </div> */}
    </div>
  )
}

export default Home
