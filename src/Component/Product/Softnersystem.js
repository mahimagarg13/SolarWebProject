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
                        <h5 className="card-title"> Water Softner System 1</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2 btn-primary">VIEW DETAILS</a>
                        <a href="#" className="btn btn-primary">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img18} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> Water Softner System 2</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2 btn-primary">VIEW DETAILS</a>
                        <a href="#" className="btn btn-primary">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img19} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> Water Softner System 3</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2 btn-primary">VIEW DETAILS</a>
                        <a href="#" className="btn btn-primary">ENQUIRE NOW</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default  Softnersystem;