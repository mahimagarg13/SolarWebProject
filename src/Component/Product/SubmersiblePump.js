// import React  from "react";
import Img22 from '../Img/lhl.jpeg';
import Img23 from '../Img/lhs.jpeg';
function  SubmersiblePump() {
    return (
        <div className="div">
            <p className="heading">Solar  Water Purifier</p>
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src={Img22} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> LHL </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img23} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">LHS</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>

               
            </div>
        </div>
    );
}
export default  SubmersiblePump;