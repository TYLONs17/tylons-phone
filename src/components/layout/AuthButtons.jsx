'use client'

import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import Link from 'next/link'


export default function AuthButtons() {
const { state } = useContext(AppContext)

    return (
        <div className="flex ">
            <button  className={`h-8 rounded-lg border-b-cyan-500 border-t-neutral-500 border-2 font-bold px-3 mr-2 text-sm text-blue-700 hover:text-white hover:bg-blue-900 hover:shadow-md hover:shadow-blue-300 active:opacity-30 ${state.theme === 'dark' ? '' : 'bg-blue-900 text-white hover:bg-primary border-blue-800'} `}>
            <Link href="#">Register</Link>
            </button>
            <button className={`h-8 border-2 rounded-lg bg-white font-bold px-3 sm:px-4 md:px-5 text-sm text-blue-700 hover:text-white hover:bg-primary hover:shadow-md hover:shadow-blue-300 active:opacity-30 ${state.theme === 'dark' ? 'border-blue-400' : 'border-blue-800' } `}>
                <Link href="#">Login</Link>
            </button> 
        </div>
    )
}