import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Offer() {
    return (
        <div className="choose">

            <p className="heading ">What We Offer</p>
            <p className="p1">Donec quis magna sit amet risus vulputate maximus eget eget arcu. Praesent sed molestie tortor.</p>

            <div className="container">
                <div className="row">
                    <div className="col  ">
                        <div className="card w m-b">
                            <div className="card-body">
                                <img className="h-w" src="/image/tech_large.png" />
                                <h6 className="color">  Technical Services</h6>
                                <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                            </div></div>
                    </div>
                    <div className="col">
                        <div className="card w m-b ">
                            <div className="card-body">
                                <img className="h-w" src="/image/ener.jfif" />
                                <h6 className="color">
                                    Energy Panels</h6>
                                <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                            </div> </div>   </div>
                    <div className="col">
                        <div className="card w m-b">

                            <div className="card-body ">
                                <img className="h-w" src="/image/w.png" />
                                <h6 className="color">Wind Generators</h6>
                                <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                            </div></div>
                    </div>
                </div>
            </div>
            <div className="container m-top">
                < div className="row">
                    <div className="col">
                        <div className="card w m-b">
                            <div className="card-body ">
                                <img className="h-w" src="/image/ser.png" />
                                <h6 className="color">   Solar As a Services</h6>
                                <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                            </div></div>
                    </div>
                    <div className="col">
                        <div className="card w m-b">
                            <div className="card-body ">
                                <img className="h-w" src="/image/pv.png" />
                                <h6 className="color">Solar PV Systems</h6>
                                <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting . </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card  w m-b">
                            <div className="card-body ">
                                <img className="h-w" src="/image/solaricon.png" />
                                <h6 className="color">   Solar Panel Services</h6>
                                <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}
export default Offer;