import React from 'react'
import ConferenceFooter from '../components/footer/footer'
import "./Acknoledgement.css"
import { Link } from 'react-router-dom'

const AcknoledgementPage = () => {
  return (
    <>
        {/* <Navbar/> */}
        <div className='container' style={{
            display:"flex",
            flexDirection:"column",
            // padding:"10px",
            gap:"10px"  ,
            overflowY:"hidden",
            alignItems:"center",
            background: "linear-gradient(to right, #f8fbff, #f1f4f8)",
            paddingLeft:"90px",
            paddingRight:"90px",
            paddingTop:"150px",
            paddingBottom:"150px"
        }}>
           
           
            <div className="acknowledgement-2">
                <div className="ack-main-2">
                    <div className=''>
                        <h1 style={{
                    textTransform:"uppercase",
                    display:"flex", 
                    alignItems:"center",
                    gap:"10px"
                    }}>
                         <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-info-icon lucide-badge-info"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>
                        CMT Acknowledgement
                    
                    </h1>
                    <p>The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>
                    </div>
                    <img src="./cmt-logo.jpg" alt="" srcset="" className='img-logo'/>
                </div>


            </div>
               <Link to={"/"}>
                     <button style={{ 
                    padding: "20px 100px 20px 100px",
                    fontSize:"20px",
                    fontWeight:"bold", 
                    backgroundColor: "#264087",
                    borderRadius: "10px",
                    color:'white', 
                    cursor:"pointer",
                    display:"flex", 
                    alignItems:"center", 
                    gap:"10px"


                }}> Go Back
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-undo2-icon lucide-undo-2"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>
                 </button>
               </Link>
        </div>
     
        <ConferenceFooter/>
    </>
  )
}

export default AcknoledgementPage