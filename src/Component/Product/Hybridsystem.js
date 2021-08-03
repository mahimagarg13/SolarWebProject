// import React  from "react";
import Img6 from '../Img/solarizer1.jpeg';
import Img7 from '../Img/solarizer2.jpeg';
import Img8 from '../Img/solarizer3.jpeg';
import Img9 from '../Img/solarizer4.jpeg';

function hybridsystem() {
    return (
        <div className="div">
            <p className="heading">Solarizer Heat Pump/HYBRID SYSTEM</p>
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src={Img6} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Solarizer Spring HPSV-500-13 </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img7} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Solarizer Spring HPSH-300-09 </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img8} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Solarizer Spring HPV-500-18</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>
                <div className="card card-w">
                    <img className="card-img-top" src={Img9} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Heat Pumps for domestic as well as for  hotels , hospitals , hostel ,and Resorts </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>
            </div>
            </div>
        
    );
}
export default hybridsystem;