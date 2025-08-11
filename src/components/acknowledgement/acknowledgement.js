import React from 'react'
import './style.css'
const Acknowledgement = ({style})=> {
  return (
    <div className="acknowledgement">
        <div className="ack-main " style={{
          // maxWidth:"100%",
          ...style
          }}>
            <div className=''>
                <h1 style={{
            textTransform:"uppercase"
            }}>CMT Acknowledgement</h1>
            <p>The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>
            </div>
            <img src="./cmt-logo.jpg" alt="" srcset="" className='img-logo'/>
            </div>

        </div>
  )
}

export default Acknowledgement
