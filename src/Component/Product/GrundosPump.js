// import React  from "react";
import Img3 from '../Img/cm.jpeg';
import Img4 from '../Img/hydro.jpeg';
import Img5 from '../Img/scala.jpeg';
function  GrundosPump() {
    return (
        <div className="div">
            <p className="heading">GRUNDFOS CM BOOSTER PUMP</p>
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src={Img3} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">CM Pressure booster pump  </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img4} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Hydro pneumatic pump  </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>
                <div className="card card-w">
                    <img className="card-img-top" src={Img5} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Scala Pump  </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>
               
            </div>
        </div>
    );
}
export default  GrundosPump;