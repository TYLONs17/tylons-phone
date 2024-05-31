"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePagesContext } from '@/context/AppContext'

import '@fortawesome/fontawesome-free/css/all.css'
import AnimatedRight from '@/components/icons/AnimatedRight'
import RippleButton from '@/components/utils/RippleButton'






export default function Home() {
  const { state, dispatch } = usePagesContext()

  const setCurrentTab = (page) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page })
  }

  function getCV() {
    window.open("/images/CV Dec23-ME.pdf", '_blank')
  }
  function showWorks() {
    // window.open("/profile#projects", '_blank')
    setCurrentTab('/profile')
  }

  function showMyself() {
    // window.open("/profile", '_blank')
    setCurrentTab('/profile')
  }



  return (
    <main className="flex flex-col items-center justify-between p-4 p-6">
      <div className="z-10 max-w-xs w-full items-center justify-between font-mono text-sm ">
        <div className="absolute z-[5] bottom-0 left-0 flex h-12 h-24 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
          <a
            className="pointer-events-auto flex place-items-center gap-2 p-4"
            href="https://github.com/JALES25"
            target="_blank"
            rel="noopener noreferrer"
          >
            This here is:
              <Image
                src="/images/JALESnotJAQUE.png"
                alt="JALESnotJAQUE"
                className="rounded-[2em] do-ripple "
                width={80}
                height={4}
              />

            {'JALESnotJAQUE'}
          </a>
        </div>
      </div>
      

      {/* //this the display for larger screens */}
      {/* <div className="hidden md:block">
        <h2 className="font-bold text-4xl">
          <i className="fas fa-quote-left"></i>
          welcome to my personal site.
        </h2>
        <hr /><br />
        <p className=" text-4xl">
          It was made to be a place i could put my skills to use, it will also serve as a place to practice and show my other works. <br />
          Do snooop around and see what you could find. 
        </p>
      </div> */}

      {/* // this is fpr small screens */}
      <div className="">
        <h2 className="font-bold text-2xl">
          <i className="fas fa-quote-left"></i>
          welcome to my personal site.
        </h2>
        <hr /><br />
        <p className=" text-2xl">
          A place to test, practice and show my skills. <br />
          Checkout my works.
        </p>
      </div>

      {/* <Card /> */}

      {/* <ThemeButtons /> */}

      {/* <div className="flex items-center justify-center flex-col sm:flex-row ">
        <h4 className="mb-4 sm:mb-0 sm:absolute sm:left-[6rem] "><Link href="/contact">Looking to hire me?</Link> </h4>
        <AnimatedRight />
        <div>
          <RippleButton onClick={getCV}  id="downloadButton">Download CV</RippleButton>
          <RippleButton onClick={showWorks} >Checkout My Works</RippleButton>

          <RippleButton onClick={showMyself}>TYLONs</RippleButton>
          
          
        </div>
      </div> */}

      <div className="flex items-center justify-center">
        <h4 className="absolute text-sm left-[2rem] mt-0 mb-20 border-b-2 border-blue-600 hover:text-blue-300 hover:border-blue-400 ">
          <Link href="/" onClick={() => setCurrentTab('/profile')}>Looking to hire me?</Link>
        </h4>
        <AnimatedRight className="hidden mt-6"/>
        <div className="flex flex-col gap-2"> 
          <RippleButton onClick={getCV} id="downloadButton" className="w-full " >Download CV</RippleButton>
          <RippleButton onClick={showWorks} className="w-full " > My Works</RippleButton>
          <RippleButton onClick={showMyself} className="hidden " >TYLONs</RippleButton>
        </div>
      </div>
      
    </main>
  )
}