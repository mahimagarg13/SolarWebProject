// import React  from "react";
import Img27 from '../Img/spring.jpeg';
import Img28 from '../Img/ultra.jpeg';
import Img29 from '../Img/value.jpeg';

function WaterHeater() {
    return (
        <div className="div">
            <p className="heading">Solar hot water systems </p>
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src={Img27} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> Solarizer Spring </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img28} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> Solarizer ULTRA </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img29} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Solarizer VALUE </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>
                </div>
               
        </div>
    );
}
export default WaterHeater;