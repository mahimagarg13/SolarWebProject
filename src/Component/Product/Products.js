import { green } from '@material-ui/core/colors';

import Button from '@material-ui/core/Button';

function Products() {
    return (
        <div className="product-main">
            <p className="heading">What Are You Looking For?</p>
            <div className="product-container">
                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col  ">
                                <div className="card w m-b">
                                    <div className="card-body custom-width">
                                        <img className="h-w" src="/image/rooftop.png" />
                                        <h6 className="color"> SOLAR ROOFTOP</h6>
                                        {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                        <Button variant="outlined" color="primary" >
                                            View Products
                                        </Button>
                                    </div></div>
                            </div>
                            <div className="col">
                                <div className="card w m-b ">
                                    <div className="card-body custom-width">
                                        <img className="h-w" src="/image/light.png" />
                                        <h6 className="color">
                                            SOLAR STREET LIGHT</h6>
                                        {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                        <Button variant="outlined" color="primary">
                                            View Products
                                        </Button>
                                    </div> </div>   </div>
                            <div className="col">
                                <div className="card w m-b">

                                    <div className="card-body custom-width">
                                        <img className="h-w" src="/image/hybrid.png" />
                                        <h6 className="color">SOLAR HYBRID SYSTEM</h6>
                                        {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                        <Button variant="outlined" color="primary">
                                            View Products
                                        </Button>
                                    </div></div>
                            </div>
                            <div className="col">
                                <div className="card  w m-b">
                                    <div className="card-body custom-width">
                                        <img className="h-w" src="/image/wtrcooler.png" />
                                        <h6 className="color">WATER COOLER</h6>
                                        {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                        <Button variant="outlined" color="primary">
                                            View Products
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            {/* </div>
            </div>
            <div className="container m-top">
                < div className="row"> */}
                            <div className="col">
                                <div className="card w m-b">
                                    <div className="card-body custom-width ">
                                        <img className="h-w" src="/image/heater.png" />
                                        <h6 className="color">  SOLAR WATER HEATER</h6>
                                        {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                        <Button variant="outlined" color="primary">
                                            View Products
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card w m-b">
                                    <div className="card-body custom-width">
                                        <img className="h-w" src="/image/purifier.png" />
                                        <h6 className="color">WATER PURIFIER</h6>
                                        {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting . </p> */}
                                        <Button variant="outlined" color="primary">
                                            View Products
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card  w m-b">
                                    <div className="card-body custom-width">
                                        <img className="h-w" src="/image/soft.png" />
                                        <h6 className="color">  WATER SOFTNER SYSTEM</h6>
                                        {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                        <Button variant="outlined" color="primary">
                                            View Products
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card  w m-b">
                                    <div className="card-body custom-width">
                                        <img className="h-w" src="/image/pump.png" />
                                        <h6 className="color">  PRESSURE PUMP</h6>
                                        {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                        <Button variant="outlined" color="primary">
                                            View Products
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Products;