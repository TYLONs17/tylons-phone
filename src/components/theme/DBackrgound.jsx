import './DBackground.css'

export default function DBackground ({children}) {



  return (
    <div className="dbg-body ">
        <section className="dbg-section">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            
        </section>
        <div className=" ">{children}</div>
    </div>
  )
}

