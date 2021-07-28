// import React  from "react";
import Img10 from '../Img/img10.jpeg';
import Img11 from '../Img/img11.jpeg';
import Img12 from '../Img/img12.jpeg';
function WaterHeater() {
    return (
        <div className="div">
            <p className="heading">Solar Water Heater</p>
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src={Img10} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Solar Water Heater 1</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-warning">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-warning">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img11} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Solar Water Heater 2</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-warning">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-warning">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img12} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Solar Water Heater 3</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-warning">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-warning">ENQUIRE NOW</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WaterHeater;