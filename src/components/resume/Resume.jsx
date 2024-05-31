"use client"

import { useState } from "react"
import SocialLinks from "../icons/SocialLinks"
import Image from "next/image"

import { FaEye, FaEyeSlash } from 'react-icons/fa'


export default function Resume() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalOpacity, setModalOpacity] = useState(0)

    const openModal = () => {
        setIsModalOpen(true)
        setTimeout(() => setModalOpacity(1), 0)
    }

    const closeModal = () => {
        setModalOpacity(0)
        setTimeout(() => setIsModalOpen(false), 500)
    }

    // 
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className="bg-gray-500 bg-opacity-60">
            <div className="container mx-auto py-6">
                <div className="grid grid-cols-4 gap-4 px-4">
                    <div className="col-span-4 ">
                        <div className="bg-gray-600 bg-opacity-70 shadow rounded-lg p-6">
                            <div className="relative flex flex-col items-center">
                            <Image onClick={openModal} src="/images/20230914_133438-JALES.jpg" width={100} height={100} className=" bg-blue-300 rounded-full mb-4 object-cover cursor-pointer" alt="A picture of the developer" />
                                

                                {isModalOpen && (
                                    <div onClick={closeModal} className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out">
                                        <Image src="/images/20230914_133438-JALES.jpg" width={200} height={1080} alt="A pop up picture of the developer" className="max-h-full max-w-full" />
                                    </div>
                                )}

                                <h1 className="text-lg font-bold">Joshua Ngoako Modiba</h1>
                                <p className="text-blue-500 text-sm">Software/Front-End Developer </p>
                                <div className="mt-3 flex flex-wrap gap-4 justify-center">
                                    <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                                    <a href="public/images/CV Dec23-ME.pdf" target="_blank" className="bg-gray-100 hover:bg-gray-400 text-blue-500 py-2 px-4 rounded">Resume</a>
                                </div>
                            </div>
                            <hr className="my-4 border-t border-blue-700" />
                            <div className="flex justify-center align-center gap-4" >
                                <div className="flex flex-col">
                                    <span className="text-blue-500 uppercase font-bold tracking-wider mb-2 text-sm">Front-End Skills</span>
                                    <ul>
                                        <li className="mb-2">JavaScript</li>
                                        <li className="mb-2">React / Next.js</li>
                                        <li className="mb-2">Node.js</li>
                                        <li className="mb-2">HTML/CSS</li>
                                        <li className="mb-2">Sass Scss</li>
                                        <li className="mb-2">Tailwind Css</li>
                                        <li className="mb-2">Boodstrap Css</li>
                                    </ul>
                                </div>

                                <hr className=" md:hidden border-t border-blue-700" />

                                <div className="flex flex-col">
                                    <span className="text-blue-500 uppercase font-bold tracking-wider mb-2 text-sm">Extra Skills</span>
                                    <ul>
                                        <li className="mb-2">C#</li>
                                        <li className="mb-2">ASP.NET Core MVC</li>
                                        <li className="mb-2">ASP.NET Core Blazor</li>
                                        <li className="mb-2">PYTHON & JAVA</li>
                                        <li className="mb-2">Web Security</li>
                                        <li>PenTesting & CTFs</li>
                                        <li>Scripting (py3 / bash)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 ">
                        <div className="bg-gray-600 bg-opacity-70 shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">About Me - <span className="text-sm text-blue-500">A student self learning Web Delopment while studying a computer networking Uni course</span></h2>
                            
                            <p className="text-blue-500 hidden ">
                                <span className="font-bold">Here&apos;s a quick reflection of my personality and aspirations </span>
                                <br />
                                <span>
                                    --- <br />
                                    Hello there! 👋 I go by <i className="font-bold">TYLONs</i>. <br />
                                    I&apos;m a passionate computer networking student with a keen interest in mastering the intricacies of JavaScript, C#, Python, and Java. <br /> 
                                    My journey into the world of programming doesn&apos;t stop there – I&apos;m also delving into the realms of web development with HTML, CSS, and React, with a particular focus on the Next.js Framework.
                                    Recently, I made the exciting discovery of going into Cyber-Security and a turn to Ubuntu as my operating system, and I&apos;ve come to appreciate the power and efficiency of the terminal and all the easily accessible Networking and PenTesting tools available at a mere command. 
                                    <br />
                                    It&apos;s not just a change in a hobby or OS; it&apos;s a shift in perspective.
                                    <br />
                                    <br />
                                    When I&apos;m not immersed in lines of code, you can find me Lyric writing or doing Muai Thai at the gym and sometimes exploring the latest trends in technology, always eager to apply myself, learn and adapt. Join me on this digital adventure as I navigate the vast landscapes of Programming, Networking and Cyber-Security.
                                    <br />
                                    <br />
                                </span>
                            </p>
                            
                            {/* /For small devices/ */}
                            <div className="">
                                <button onClick={() => setIsVisible(!isVisible)} className=" mb-2" >
                                    {isVisible ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                {isVisible && (
                                    <p className="text-blue-500">
                                        <span className="font-bold">Here&apos;s a quick reflection of my personality and aspirations </span>
                                        <br />
                                        <span>
                                            --- <br />
                                            Hello there! 👋 I go by <i className="font-bold">TYLONs</i>. <br />
                                            I&apos;m a passionate computer networking student with a keen interest in mastering the intricacies of JavaScript, C#, Python, and Java. <br /> 
                                            My journey into the world of programming doesn&apos;t stop there – I&apos;m also delving into the realms of web development with HTML, CSS, and React, with a particular focus on the Next.js Framework.
                                            Recently, I made the exciting discovery of going into Cyber-Security and a turn to Ubuntu as my operating system, and I&apos;ve come to appreciate the power and efficiency of the terminal and all the easily accessible Networking and PenTesting tools available at a mere command. 
                                            <br />
                                            It&apos;s not just a change in a hobby or OS; it&apos;s a shift in perspective.
                                            <br />
                                            <br />
                                            When I&apos;m not immersed in lines of code, you can find me Lyric writing or doing Muai Thai at the gym and sometimes exploring the latest trends in technology, always eager to apply myself, learn and adapt. Join me on this digital adventure as I navigate the vast landscapes of Programming, Networking and Cyber-Security.
                                            <br />
                                            <br />
                                        </span>
                                    </p>
                                )}
                            </div>

                            <p className="text-blue-500">
                                
                                <span>
                                    ---
                                    <br />
                                    Let&apos;s connect and build something amazing together! 
                                    <br />
                                    ---
                                </span>

                            </p>

                            

                            <hr className="my-6 border-t border-blue-700" />

                            <h3 className="font-semibold text-center mt-3 -mb-2">
                                Find me on
                            </h3>
                            
                            <SocialLinks />

                            <hr className="my-6 border-t border-blue-700" /> 
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}






  