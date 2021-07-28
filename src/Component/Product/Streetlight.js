// import React  from "react";
import Img4 from '../Img/img4.jpeg';
import Img5 from '../Img/img5.jpeg';
import Img6 from '../Img/img6.jpeg';
function streetlight() {
    return (
        <div className="div">
            <p className="heading">Street light</p>
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src={Img4} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Street light  1</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-warning">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-warning">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img5} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Street light  2</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-warning">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-warning">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img6} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Street light  3</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-warning">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-warning">ENQUIRE NOW</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default streetlight;