import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import { NavLink } from 'react-router-dom';

function Footer(){
    return(
        <div className="nl">
  <div className="container ">
<div className="onebox">
<img className="ft mt" src="image/logo.png"/>
            <p class="fnt-s"> ut labore et dolore magna aliquaut labore et dolore magna aliqua. Ut enim ad minim veniam, quis aks nostrud exercitation ullamco.</p>
           {/* <a href=""> </a>
           <a href=""></a>
      <a href="" ></a>
        <a href=""></a> */}
</div>
<div className="twobox mt cl">
<h5 className="h5">Quick Links</h5>
<NavLink to="" className="c">Top</NavLink><br />
<a href="" className="c">About Us</a><br />
<a href="" className="c">Services</a><br />
<a href="" className="c">Product</a><br />
<a href="" className="c">Contact Us</a><br />
</div>
<div className="thirdbox mt cl">
<h5 className="h5">Contact Us</h5>

<PhoneRoundedIcon /><a href="" className="ca" style={{marginLeft:22}}>+91-9845654564</a><br />

< MailOutlineRoundedIcon /> <a href="" className="ca" style={{marginLeft:15}}>abc@domain.com</a><br />
<LocationOnRoundedIcon/><a href="" className="ca" style={{marginLeft:10}}>H.No.-23,Apartment,Kolar Road,bhopal(Madhya Pradesh)424987</a><br />
</div>
<div className="forthbox mt">
  <h5 className="h5 text-center">Follow Us</h5>
  <a href="" className="icon i">< FacebookIcon /></a>
  <a href=""  className="icon">< WhatsAppIcon/></a>
  <a href=""  className="icon">< YouTubeIcon/></a>
</div>
</div>
<div className="text-center copyright">Copyright © 2021</div>
</div>
  


    );
}
export default Footer;