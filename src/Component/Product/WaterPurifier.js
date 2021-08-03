import React  from "react";
import Img30 from '../Img/img13.jpeg';
import Img31 from '../Img/img14.jpeg';
import Img32 from '../Img/img11.jpeg';
function  waterPurifier() {
    return (
        <div className="div">
            <p className="heading">Solar  Water Purifier</p>
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src={Img30} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> Water Purifier 1</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img31} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> Water Purifier 2</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img32} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> Water Purifier 3</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default  waterPurifier;