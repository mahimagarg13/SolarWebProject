// import React  from "react";
import Img7 from '../Img/img7.jpeg';
import Img8 from '../Img/img8.jpeg';
import Img9 from '../Img/img9.jpeg';
function hybridsystem() {
    return (
        <div className="div">
            <p className="heading"> Solar Hybrid System</p>
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src={Img7} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Solar Hybrid System 1</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-warning">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-warning">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img8} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Solar Hybrid System 2</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-warning">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-warning">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img9} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Solar Hybrid System 3</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-warning">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-warning">ENQUIRE NOW</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default hybridsystem;