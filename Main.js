import React from 'react'
import Card from "./Card"

const Data = [
   {
    name: "OYO Hotel Dream Scky India",
    price: 500,
    oldprice: 700,
    rating: 4.0,
    cancellation: "block",
    prepayment: "none",
    imgUrl: "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
    distance: 2,
    gatewayDeal: "block",
    review : 5,
    rewDes: "Review Score"
   },
   {
    name: "FabHotel Prime Avenue India",
    price: 800,
    oldprice: 900,
    rating: 2.0,
    cancellation: "none",
    prepayment: "none",
    imgUrl: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
    distance: 4,
    gatewayDeal: "block",
    review : 20,
    rewDes: "Good Hotel"

   },
   {
    name: "Essentia Luxury Hotel Indore",
    price: 749,
    oldprice: 849,
    rating: 3.5,
    cancellation: "none",
    prepayment: "block",
    imgUrl: "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
    distance: 11,
    gatewayDeal: "none",
    review : 200,
    rewDes: "Very Good"
   },
   {
    name: "Ramada Encore by Wyndham",
    price: 999,
    oldprice: 1199,
    rating: 4.9,
    cancellation: "none",
    prepayment: "none",
    imgUrl: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
    distance: 5,
    gatewayDeal: "block",
    review : 559,
    rewDes: "Exellent "
   },

]
const Main = () => {
  return (
    <div>
    {Data.map((data)=>(
        <Card data={data}/>
    ))}
    
    </div>
  )
}

export default Main