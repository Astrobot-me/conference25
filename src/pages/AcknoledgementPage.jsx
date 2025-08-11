import React from 'react'
import ConferenceFooter from '../components/footer/footer'
import "./Acknoledgement.css"

const AcknoledgementPage = () => {
  return (
    <>
        {/* <Navbar/> */}
        <div style={{
            display:"flex",
            flexDirection:"column",
            // padding:"10px",
            gap:"10px"  ,
            overflowY:"hidden",
            alignItems:"center",
            background: "linear-gradient(to right, #f8fbff, #f1f4f8)"


        }}>
            {/* <div style={{ 
                display:"flex",
                gap:"10px",
                backgroundColor:"transparent"
            }}>
                <img src="./rit-logo.jpg" alt="" srcset="" className='img-logo'/>
                <img src="./cmt-logo.jpg" alt="" srcset="" />
                
            </div> */}
            <div style={{ 
                height:"100vh",
                width:"90vw", 
                overflowY:"hidden",
                display:"flex", 
                justifyContent:"center"
            }}>
                <div className="acknowledgement">
                    <div className="ack-main">
                        <div className=''>
                            <h1 style={{
                        textTransform:"uppercase"
                        }}>CMT Acknowledgement</h1>
                        <p>The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>
                        </div>
                        <img src="./cmt-logo.jpg" alt="" srcset="" className='img-logo'/>
                        </div>

                    </div>
                </div>
        </div>
        <ConferenceFooter/>
    </>
  )
}

export default AcknoledgementPage