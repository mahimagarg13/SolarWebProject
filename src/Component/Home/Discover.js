import 'bootstrap/dist/css/bootstrap.min.css';

function Discover() {
    return (<div className="">
           <h2 className="text-center discover heading ">Discover The Advantages</h2>
           <p className="p1">Donec quis magna sit amet risus vulputate maximus eget eget arcu. Praesent sed molestie tortor.</p>

        <div className="container">

            <div className="flex-left h">
                <div className="d1">
                
                    <div className="card m-b">
                        <div className="card-body">
                            <img className="h-w" src="/image/solaricon.png" />
                            <h6 className="clrd">   Solar Panel Services</h6>
                            <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                        </div></div>
                    <div className="card m-b">
                        <div className="card-body">
                            <img className="h-w" src="/image/wind.png" />
                            <h6 className="clrd">Best Wind Energy</h6>
                            <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>

                        </div></div>
                    <div className="card m-b">
                        <div className="card-body">
                            <img className="h-w" src="/image/garan.png" />
                            <h6 className="clrd">Extended Gaurantee</h6>
                            <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>

                        </div></div><a href="" className="btn a btn-lg btn-block btn-outline-success">View All</a>


                </div>
            </div>
            <div className="flex-right h">
                <img className="f-l m-l " src="/image/discover.gif" />
            </div>

        </div>



</div>

    );
}
export default Discover;