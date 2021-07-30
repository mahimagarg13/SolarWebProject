import React, { useState } from 'react'

const[model, setModel] = useState (false);
const [tempimgSrc, setTempImgSrc]= useState(' ');

const getImg 

export default function Galary(props) {
    console.log(props.state.images)
    return (
        <>
       



        <p className="heading">Gallery</p>
            <div className="text-center " handleSetTag="{setTag}">
                <button className="btn m-2 btn-outline-dark"  onClick={props.filterGalary} name="one" handleSetTag="{setTag}">ONE</button>
                <button className="btn m-2 btn-outline-dark"  onClick={props.filterGalary} name="two" handleSetTag="{setTag}">TWO</button>
                <button className="btn m-2 btn-outline-dark"  onClick={props.filterGalary} name="three" handleSetTag="{setTag}">THREE</button>
                <button className="btn m-2 btn-outline-dark"  onClick={props.filterGalary} name="four" handleSetTag="{setTag}" >FOUR</button>
                <button className="btn m-2 btn-outline-dark"  onClick={props.filterGalary}  name="all" handleSetTag="{setTag}">All</button>
            </div>
            <div className="gallery">
          {props.state.images?.map((image) => (
              <img className="pics" onClick={() => getImg(image.image.src)} style={{width:"200px",height:"200px"}} src={image.src} alt="" />
          ))}
            </div>

         </>
    )
}
