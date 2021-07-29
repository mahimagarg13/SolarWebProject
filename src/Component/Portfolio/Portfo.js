import React, { useEffect, useState } from "react";

// import { SettingsSystemDaydreamSharp } from "@material-ui/icons";
// import './gallery.css'

// const Gallery =() =>{
// const  filerItem = (categItem) => {
//     const updatedItems = filter((curElem) =>{
//         return curElem.category == categItem;
//     });
//     setItems(updatedItems);
// }

const Img = [
    {
        id: 1,
        imageName: '/img1.jpeg', tag: 'one'
    },


    {
        id: 2,
        imageName: 'img2.jpeg', tag: 'two'

    },
    {
        id: 3,
        imageName: 'img3.jpeg', tag: 'three'

    },
    {
        id: 4,
        imageName: 'img4.jpeg', tag: 'four'
    },
    {
        id: 5,
        imageName: 'img5.jpeg', tag: 'five'
    },
    {
        id: 6,
        imageName: 'img6.jpeg', tag: 'one'
    },
    {
        id: 7,
        imageName: 'img7.jpeg', tag: 'two'

    },
    {
        id: 8,
        imageName: 'img8.jpeg', tag: 'three'
    },
    {
        id: 9,
        imageName: 'img9.jpeg', tag: 'four'
    },
    {
        id: 10,
        imageName: 'img10.jpeg', tag: 'five'

    },
    {
        id: 11,
        imageName: 'img11.jpeg', tag: 'one'
    },
    {
        id: 12,
        imageName: 'img12.jpeg', tag: 'two'

    },
    {
        id: 13,
        imageName: 'img13.jpeg', tag: 'four'
    },
    {
        id: 14,
        imageName: 'img14.jpeg', tag: 'three'

    }
]
function Gallery() {
    const [tag, setTag] = useState('all');
    const [filteredImg, setFilteredImg] = useState([]);
    useEffect(() => {
        tag === 'all' ? setFilteredImg(Img) : setFilteredImg(Img.filter(Image => Image.tag === tag))
    }, [tag])
    return (
        <div className="portfolio">
            <p className="heading">Gallery</p>
            <div className="text-center " handleSetTag="{setTag}">
                <button className="btn m-2 btn-outline-dark"  name="one" handleSetTag="{setTag}">ONE</button>
                <button className="btn m-2 btn-outline-dark"  name="two" handleSetTag="{setTag}">TWO</button>
                <button className="btn m-2 btn-outline-dark"  name="three" handleSetTag="{setTag}">THREE</button>
                <button className="btn m-2 btn-outline-dark"  name="four" handleSetTag="{setTag}" >FOUR</button>
                <button className="btn m-2 btn-outline-dark"  name="all" handleSetTag="{setTag}">All</button>
               
            </div>
            <div className="gallery">
                {filteredImg.map (image =>
                     <div className="pics" key={image.id}>
                         <img src={`/Img/${image.imageName}`} alt=""/>
                           </div>)}</div>
                </div>

        

    );
}
const button  = ({ name, handleSetTag }) => {
     return <button onClick={()=> handleSetTag(name)}>{name.toUpperCase()}</button>;

};
export default Gallery;