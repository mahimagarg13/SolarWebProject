import React from "react";
import Img24 from '../Img/watercooler.jpeg';
import Img25 from '../Img/watercooler1.jpeg';
import Img26 from '../Img/watercooler2.jpeg';
function  Watercooler() {
    return(
<div className="watercooler">
<p className="heading">
    Water Cooler
</p>
<div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src={Img24} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> Water cooler 1</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img25} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> Water cooler 2</h5>
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img26} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> Water cooler 3</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>
            </div>
        </div>

    );
    
}
export default Watercooler;