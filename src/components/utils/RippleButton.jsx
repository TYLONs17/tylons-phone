import Ripples from 'react-ripples'


export default function RippleButton ({ onClick, children, id, className }) {
  return (
      <div className={` ${className}`}>
        <Ripples className={`rounded-full `} color={'skyblue'} during={1200}>
          <button onClick={onClick} className="text-sm border-blue-600 border-2 rounded-full m-2 p-2 hover:border-blue-900 hover:bg-gray-600 hover:bg-opacity-40 hover:text-gray-300 font-bold custom-text-shadow shadow-sm hover:shadow-md hover:shadow-blue-300 active:opacity-30 transition-all ease-linear">
          {children}
          </button>
        </Ripples>
      </div>
  )
}