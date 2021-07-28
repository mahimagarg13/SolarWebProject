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
import { SettingsSystemDaydreamSharp } from "@material-ui/icons";
// import './gallery.css'

const Gallery =() =>{
    // const  filerItem = (categItem) => {
    //     const updatedItems = filter((curElem) =>{
    //         return curElem.category == categItem;
    //     });
    //     setItems(updatedItems);
    // }

    let data =[
        {
            id:1,
            imgSrc:Img1,
            category:"one",
        },
        {
            id:2,
            imgSrc:Img2,
            category:"three",

        },
        {
            id:3,
            imgSrc:Img3,
            category:"four",

        },
        {
            id:4,
            imgSrc:Img4,
            category:"one",

        },
        {
            id:5,
            imgSrc:Img5,
            category:"five",

        },
        {
            id:6,
            imgSrc:Img6,
            category:"one",

        },
        {
            id:7,
            imgSrc:Img7,
            category:"five",

        },
        {
            id:8,
            imgSrc:Img8,
            category:"two",

        },
        {
            id:9,
            imgSrc:Img9,
            category:"one",

        },
        {
            id:10,
            imgSrc:Img10,
            category:"three",

        },
        {
            id:11,
            imgSrc:Img11,
            category:"two",

        },
        {
            id:12,
            imgSrc:Img12,
            category:"one",

        },
        {
            id:13,
            imgSrc:Img13,
            category:"four",

        },
        {
            id:14,
            imgSrc:Img14,
            category:"two",

        }
    ]

    return (
        <div className="portfolio">
                       <p className="heading">Gallery</p>
                       <div className="text-center">
                        <a className="btn m-2 btn-outline-dark">ONE</a>
                        <a className="btn  btn-outline-dark">TWO</a>
                        <a className="btn m-2 btn-outline-dark">THREE</a>
                        <a className="btn btn-outline-dark">FOUR</a>
                        <a className="btn m-2 btn-outline-dark">FIVE</a>
</div>
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