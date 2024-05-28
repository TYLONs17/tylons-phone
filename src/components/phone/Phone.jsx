'use client'


import React, { useState, useEffect } from 'react'
import './phone.css'
import TYLONsLogo from '../icons/TYLONsLogo'
import AuthButtons from '../layout/AuthButtons'
import DBackground from '../theme/DBackrgound'
import Messages from '../layout/pages/Messages'

export default function MagicMenuIndicator () {
  const [activeIndex, setActiveIndex] = useState(1) 

  useEffect(() => {
    const listItems = document.querySelectorAll('.list')
    const list1Items = document.querySelectorAll('.list1')

    const activeLink = function () {
      const index = Array.from(this.parentNode.children).indexOf(this)

      setActiveIndex(index)
    }

    listItems.forEach((item) => item.addEventListener('click', activeLink))
    list1Items.forEach((item) => item.addEventListener('click', activeLink))

    return () => {
      listItems.forEach((item) => item.removeEventListener('click', activeLink))
      list1Items.forEach((item) => item.removeEventListener('click', activeLink))
    }
  }, [])

  return (
    <div className="container">
      <div className="phone">
        <div className="main-content">
          <nav className="top-nav" role="navigation">
            <div className="logo">
              <TYLONsLogo /> 
            </div>

            <div>
              <AuthButtons />
            </div>
            
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <li className={`list1 ${activeIndex === 0 ? 'active' : ''}`}><a href="#">Home</a></li>
                <li className={`list1 ${activeIndex === 1 ? 'active' : ''}`}><a href="#">Profile</a></li>
                <li className={`list1 ${activeIndex === 2 ? 'active' : ''}`}><a href="#">Messages</a></li>
                <li className={`list1 ${activeIndex === 3 ? 'active' : ''}`}><a href="#">Photos</a></li>
                <li className={`list1 ${activeIndex === 4 ? 'active' : ''}`}><a href="#">Settings</a></li>
              </ul>
            </div>
          </nav>

          
            
          <DBackground>
            <main className="tabs">
                <Messages />
            </main>
          </DBackground>

          <header className="bottom-nav">
            <nav className="navigation">
              <ul>
                <li className={`list ${activeIndex === 0 ? 'active' : ''}`}>
                  <a href="#">
                    <span className="icon">
                      <ion-icon name="home-outline"></ion-icon>
                    </span>
                    <span className="text">Home</span>
                  </a>
                </li>
                <li className={`list ${activeIndex === 1 ? 'active' : ''}`}>
                  <a href="#">
                    <span className="icon">
                      <ion-icon name="person-outline"></ion-icon>
                    </span>
                    <span className="text">Profile</span>
                  </a>
                </li>
                <li className={`list ${activeIndex === 2 ? 'active' : ''}`}>
                  <a href="#">
                    <span className="icon">
                      <ion-icon name="chatbubble-outline"></ion-icon>
                    </span>
                    <span className="text">Messages</span>
                  </a>
                </li>
                <li className={`list ${activeIndex === 3 ? 'active' : ''}`}>
                  <a href="#">
                    <span className="icon">
                      <ion-icon name="camera-outline"></ion-icon>
                    </span>
                    <span className="text">Photos</span>
                  </a>
                </li>
                <li className={`list ${activeIndex === 4 ? 'active' : ''}`}>
                  <a href="#">
                    <span className="icon">
                      <ion-icon name="settings-outline"></ion-icon>
                    </span>
                    <span className="text">Settings</span>
                  </a>
                </li>
                <div className="indicator"></div>
              </ul>
            </nav>
          </header>
        </div>
      </div>
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </div>
  )
}
