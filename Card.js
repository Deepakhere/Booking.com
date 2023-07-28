import React from 'react'
import './style.css'

const Card = ({data}) => {
  return (
    <div style={{width: "100%",float:""}} className='d-flex  p1-card corner'>
    <img style={{margin: "20px"}} src={data.imgUrl} alt="bed-image" />
    <div className="p1-info d-flex">
    <section className="sec1 mx-3">
        <h1 className='fs-3 my-0'>{data.name}</h1>   
        <div>
        <span >Indore</span><span className='mx-4 my-0'>show on map</span><span>{data.distance}km from center</span>
        </div>
         <button style={{ display: `${data.gatewayDeal}`,background: "green" , color: "#fff"}}>Gateway Deal</button>
         <p style={{border: "0.5px solid black"}}>Recoommed for you group</p>
         <h5 className='m-0'>classic triple room</h5>
         <p className='m-0' >1 large double bed</p>
         <p className='m-0'>free stay for your child</p>
         <p style={{display: `${data.cancellation}`}} className='m-0'>free Cancellation</p>
         <p style={{display: `${data.prepayment}`}} className='m-0 '>No prepayment neeeded</p>  <span>pay at the property</span>
    </section>
    <section className='sec2 mx-3'>
    <div className='d-flex'> 
    <div>
    <h1 className='fs-4 my-0'>{data.rewDes}</h1>
    <p className='flex-end align-end my-0 '>{data.review} review</p>
    </div>
    <h3 style={{background: "#003580", color: "#fff" , height: "32px" , marginTop: "5px"}}>{data.rating}</h3>
    
    </div>

    <p style={{background: "#febb02" , marginBottom: "20px"}}>New to Booking.com</p>

    
    <span> 1 night  1 adult  1 child</span>
     <h1 className='fs-5' ><strike style={{color: "red"}}>₹{data.oldprice} </strike>  <span className='fs-3'>₹{data.price}</span></h1>
     <p>+72 taxes & Charges</p>
     <button style={{background:"#003580" , color: "#ffff"}}>See availability</button>
    
    </section>
    
    </div>
    </div>
  )
}

export default Card