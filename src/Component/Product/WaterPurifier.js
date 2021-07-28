// import React  from "react";
import Img13 from '../Img/img13.jpeg';
import Img14 from '../Img/img14.jpeg';
import Img15 from '../Img/img11.jpeg';
function  waterPurifier() {
    return (
        <div className="div">
            <p className="heading">Solar  Water Purifier</p>
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src={Img13} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> Water Purifier 1</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-warning">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-warning">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img14} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> Water Purifier 2</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-warning">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-warning">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img15} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> Water Purifier 3</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-warning">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-warning">ENQUIRE NOW</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default  waterPurifier;