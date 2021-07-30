// import React  from "react";
import Img17 from '../Img/img1.jpeg';
import Img18 from '../Img/img2.jpeg';
import Img19 from '../Img/img3.jpeg';
function  Softnersystem() {
    return (
        <div className="div">
            <p className="heading">Solar  Water Softner System</p>
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src={Img17} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">NGMA CARBON FILTER </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2 btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img18} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">NGMF SAND FILTER </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2 btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img19} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">ZERO B AUTO SOFTNER  </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2 btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>
                <div className="card card-w">
                    <img className="card-img-top" src={Img19} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">ZERO B PURPLE SOFTNER  </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2 btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default  Softnersystem;