import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';






function Choose() {
	return (


		<div className=" m-bottom">

			<p className="heading ">Our Testimonials</p>
			<p className="p1">Feedback</p>
			<div className="container">
				<div className="splide w" data-splide='{"type":"loop","autoplay":"true","perPage":"3"}'>
					<div className="splide__track">
						<ul className="splide__list">
							<li className="splide__slide  m-right">
								<div className="card card-div m-b ">
									<div className="card-body  m-left">
										<img className="h-w" src="" />
										<h6 className="color">  Ajay S.</h6>
										<p className="pd">"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply text of the printing and typesetting industry text of the printing and typesetting industry." </p>

									</div></div>
							</li>
							<li className="splide__slide m-right"><div className="card card-div m-b">
								<div className="card-body">
									<img className="h-w" src="" />
									<h6 className="color">
										Akshay S.</h6>
									<p className="pd">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."</p>

								</div></div></li>
							<li className="splide__slide m-right"><div className="card card-div m-b">
								<div className="card-body">
									<img className="h-w" src="" />
									<h6 className="color">Robert Anl</h6>
									<p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

								</div></div></li>
							<li className="splide__slide m-right"><div className="card card-div m-b">
								<div className="card-body">
									<img className="h-w" src="" />
									<h6 className="color">  deniel Gil</h6>
									<p className="pd">"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry." </p>

								</div></div></li>
							<li className="splide__slide m-right"><div className="card card-div m-b">
								<div className="card-body">
									<img className="h-w" src="" />
									<h6 className="color">Sam R.</h6>
									<p className="pd">"Lorem Ipsum is simply dummy text of the printing and typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry." </p>

								</div></div></li>
							<li className="splide__slide m-right"><div className="card card-div m-b">
								<div className="card-body">
									<img className="h-w" src="" />
									<h6 className="color">  Neel Jons</h6>
									<p className="pd">"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry." </p>

								</div></div></li>
							{/* <li className="splide__slide"><div className="card m-b">
							<div className="card-body">
								<img className="h-w" src="/image/solaricon.pn" />
								<h6 className="color">
									Inspection Checklist</h6>
								<p className="pd">"Lorem Ipsum is simply dummy text of the printing and typesetting industry." </p>

							</div></div></li> */}
						</ul>
					</div>

				</div>
			</div>
		</div>





	);
}
export default Choose;