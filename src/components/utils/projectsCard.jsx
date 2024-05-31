"use client"

import React, { useState } from 'react'
import Image from 'next/image'


export default function ProjectsCard ({ title, description, imageUrl, linkUrl, videoUrl, liveDemo }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleImageClick = () => {
    setIsVideoPlaying(true)
  }

  const handleVideoEnd = () => {
    setIsVideoPlaying(false)
  }

  const handleGitHubClick = () => {
    window.open(linkUrl, '_blank')
  }

  const handleLiveDemoClick = () => {
     window.open(liveDemo, '_blank')
  }

  return (
      <div className="card relative p-4 sm:hover:h-[300px] my-10 flex flex-col justify-center items-center border-4 border-blue-600 rounded-2xl shadow-lg hover:shadow-blue-800 transition-all duration-700 ease-in-out ">
            <div className="img-box bg-slate-900 absolute top-[20px] w-full h-[220px] rounded-2xl overflow-hidden transition-all duration-700 ease-in-out  ">

              {isVideoPlaying ? (
                    <video onEnded={handleVideoEnd} onClick={handleVideoEnd} src={videoUrl} autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover rounded cursor-pointer" />
                  ) : (
                    <Image onClick={handleImageClick} src={imageUrl} alt={title} width={200} height={120} objectFit="cover" className="absolute top-0 left-0 w-full h-full object-cover rounded cursor-pointer" />
                  )
                }


                {/* <Image src={imageUrl} alt={title} width={300} height={220} objectFit="cover" className="absolute top-0 left-0 w-full h-full object-cover rounded" /> */}
            </div>
            
            <div className="card-content absolute top-[252px] w-full h-[35px] py-0 px-[30px] text-center overflow-hidden transition-all duration-700 ease-in-out ">
                <h3 className="title text-lg font-bold ">{title}</h3>
                <p className="text-blue-500 text-base italic mt-1">{description}</p>
                <div className="flex justify-center items-center mt-4">
                    <button onClick={handleGitHubClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">GitHub</button>
                    <button onClick={handleLiveDemoClick} className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full ml-4">Demo</button>
                </div>
            </div>
    </div>
  )
}
