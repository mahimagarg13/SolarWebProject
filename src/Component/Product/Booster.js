// import React  from "react";
import Img1 from '../Img/booster1.jpeg';
import Img2 from '../Img/mhn.jpeg';
// import Img15 from '../Img/img11.jpeg';
function  Booster() {
    return (
        <div className="div">
            <p className="heading"> BOOSTER</p>
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src={Img1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> MH-SERIES </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img2} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">MHN-SERIES </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>

               
            </div>
        </div>
    );
}
export default  Booster;