import React from "react";
import Dialog from '@material-ui/core/Dialog';
function Aboutus() {
    return (
        <div className="">

            <div className="container">
                <div className="flex-left">
                    <img className="f-l" src="/image/about.jpeg" />

                </div>
                <div className="flex-right">
                    <img className="head" src="/image/about.gif" />
                    <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    <a href="" className="ml btn a btn-outline-primary">Read More</a>
                </div>
            </div>



        </div >


    );
}
export default Aboutus;