import React from "react";
import { Typography, Card, CardContent, Grid } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Button } from "bootstrap";
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import PinDropIcon from '@material-ui/icons/PinDrop';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { blueGrey } from "@material-ui/core/colors";
import { Reddit } from "@material-ui/icons";
import InstagramIcon from '@material-ui/icons/Instagram';
// import { Details } from "@material-ui/icons";
import TwitterIcon from '@material-ui/icons/Twitter';

function Details() {
    return (
        <div className="bg">

            <div className="container" >
                <div className="left m-top m-btm">
                    <Card>
                        <CardContent>
                            <h3 align="center">Let's Start a Conversation</h3>

                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} sm={6} item>
                                        <TextField label="First Name" placeholder="Enter First Name" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField label="Last Name" placeholder="Enter Last Name" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField type="email" label="Email" placeholder="Enter Email" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField label="Subject" placeholder="Subject" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField label="Message" multiline rows={4} placeholder="Message" variant="outlined" fullWidth required />

                                    </Grid>
                                    <Grid xs={12} item>
                                        {/* <Button type="submit" variant="contained" color="primary" >Submit</Button> */}
                                        <button type="submit" className="btn  btn-primary btn-lg btn-block">Submit</button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>


                </div>
                <div className="dtails   bkgrd m-top m-btm color-white" >
                    <h3 className="mt text-center">Contact Information</h3><br />
                    {/* <p className="pa text-center"> Contact Us For Any Queries</p> */}
                    <div className="d-flex inform" flexDirection="row">
                        <div className="ico">

                             <h6 className="mb" > < PhoneAndroidIcon style={{ color: blueGrey[100] }} /></h6>
                            {/* <a href="" className="m-left " />+91-9516247583 */}

                            <h6 className="mb">< MailOutlineRoundedIcon style={{ color: blueGrey[100] }} /></h6>
                            {/* <a href="" className="m-left" />abhi85558@yahoo.co.in </h6></p> */}
                            <h6 className="mb">< PinDropIcon style={{ color: blueGrey[100] }} /></h6>
                            {/* <a href="" className="text-start m-left" />130, Mangal Murthi Nagar Scheme No 77, Indore 452018 Madhya Pradesh</h6></p> */}
                            {/* <p> <a href="" className="icon i">< FacebookIcon  style={{ color: blueGrey[100] }} /></a>
                        <a href="" className="icon">< WhatsAppIcon  style={{ color: blueGrey[100] }} /></a>
                        <a href="" className="icon">< YouTubeIcon  style={{ color: blueGrey[100] }} /></a></p> */}
                        </div>

                        <div className="information">
                            <div className="m-bt">    <a href="" className="" />+91-9516247583</div>
                            <div  className="m-bt">    <a href="" className="" />abhi85558@yahoo.co.in<br /></div>
                            <div  className="m-bt">    <a href="" className="" />130, Mangal Murthi Nagar Scheme No 77, Indore 452018 Madhya Pradesh
                            </div > 
                           
                        </div>
                      
                    </div>
                    <div className="text-center mt-3">
                    <a href="" className="icon ">< FacebookIcon style={{ color: blueGrey[100] }}/></a>
  <a href=""  className="icon">< WhatsAppIcon style={{ color: blueGrey[100] }}/></a>
  {/* <a href=""  className="icon">< YouTubeIcon style={{ color: blueGrey[100] }}/></a> */}
  <a href=""  className="icon">< InstagramIcon style={{ color: blueGrey[100] }}/></a>
  <a href=""  className="icon">< TwitterIcon style={{ color: blueGrey[100] }}/></a>
  
  </div>
                </div>
            </div>
        </div>

    );
}
export default Details;