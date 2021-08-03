// import React  from "react";
import Img19 from '../Img/streetlight.jpeg';
import Img20 from '../Img/light2.jpeg';
import Img21 from '../Img/light3.jpeg';
function streetlight() {
    return (
        <div className="div">
            <p className="heading">Street light</p>
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src={Img19} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Street light  1</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="/Mahima_Garg.docx" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img20} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Street light  2</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img21} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Street light  3</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <a href="#" className="btn  btn-outline-success">ENQUIRE NOW</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default streetlight;