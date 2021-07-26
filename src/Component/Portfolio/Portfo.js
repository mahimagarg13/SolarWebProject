import React from "react";
import Img1 from '../Img/img1.jpeg'
import Img2 from '../Img/img2.jpeg'
import Img3 from '../Img/img3.jpeg'
import Img4 from '../Img/img4.jpeg'
import Img5 from '../Img/img5.jpeg'
import Img6 from '../Img/img6.jpeg'
import Img7 from '../Img/img7.jpeg'
import Img8 from '../Img/img8.jpeg'
import Img9 from '../Img/img9.jpeg'
import Img10 from '../Img/img10.jpeg'
import Img11 from '../Img/img11.jpeg'
import Img12 from '../Img/img12.jpeg'
import Img13 from '../Img/img13.jpeg'
import Img14 from '../Img/img14.jpeg'
// import './gallery.css'

const Gallery =() =>{
    let data =[
        {
            id:1,
            imgSrc:Img1,
        },
        {
            id:2,
            imgSrc:Img2,
        },
        {
            id:3,
            imgSrc:Img3,
        },
        {
            id:4,
            imgSrc:Img4,
        },
        {
            id:5,
            imgSrc:Img5,
        },
        {
            id:6,
            imgSrc:Img6,
        },
        {
            id:7,
            imgSrc:Img7,
        },
        {
            id:8,
            imgSrc:Img8,
        },
        {
            id:9,
            imgSrc:Img9,
        },
        {
            id:10,
            imgSrc:Img10,
        },
        {
            id:11,
            imgSrc:Img11,
        },
        {
            id:12,
            imgSrc:Img12,
        },
        {
            id:13,
            imgSrc:Img13,
        },
        {
            id:14,
            imgSrc:Img14,
        }
    ]

    return (
        <div className="portfolio">
                       <p className="heading">Gallery</p>

        <div className="gallery">
            {data.map((item,index)=>{
                return(
                        <div className="pics" key={index}>
                            <img src={item.imgSrc} />
                            </div>
                )
            })}
        </div>
       </div>
    
    );
}
export default Gallery;