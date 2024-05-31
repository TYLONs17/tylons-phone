'use client'

import React from 'react'
import { usePagesContext } from '../../../context/AppContext'
import Home from './Home'
import Profile from './Profile'
import Messages from './Messages'
import Photos from './Photos'
import Contact from './Contact'

export default function PagesComponent() {
    const { state, dispatch } = usePagesContext()

    const setCurrentTab = (page) => {
        dispatch({ type: 'SET_CURRENT_PAGE', payload: page })
    }

    return (
        <div>
            {/* <nav>
                <button onClick={() => setCurrentTab('/home')}>Home</button>
                <button onClick={() => setCurrentTab('/profile')}>Profile</button>
                <button onClick={() => setCurrentTab('/messages')}>Messages</button>
                <button onClick={() => setCurrentTab('/photos')}>Photos</button>
                <button onClick={() => setCurrentTab('/contact')}>Contact</button>
            </nav> */}
            <div>
                {state.currentPage === '/home' && <Home />}
                {state.currentPage === '/profile' && <Profile />}
                {state.currentPage === '/messages' && <Messages />}
                {state.currentPage === '/photos' && <Photos />}
                {state.currentPage === '/contact' && <Contact />}
            </div>
        </div>
    )
}

