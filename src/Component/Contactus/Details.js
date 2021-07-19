import React from "react";
import { Typography, Card, CardContent, Grid } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Button } from "bootstrap";
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import { Details } from "@material-ui/icons";

function Details() {
    return (
        <div className="bg">

            <div className="container" >
                <div className="left m-top m-btm">
                    <Card>
                        <CardContent>
                            <h3 align="center">Fill Free Contact Us</h3>

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
                                        <button  type="submit" className="btn  btn-primary btn-lg btn-block">Submit</button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>


                </div>
                <div className="dtails   bkgrd m-top m-btm color-white" >
                    <h3 className="mt text-center">Contact Info</h3><br/>
                    {/* <p className="pa text-center"> Contact Us For Any Queries</p> */}
                    <div className="text-center">

                        <p><h5 > <PhoneRoundedIcon /> Phone</h5><a href="" className="m-left " />+91-216548852</p>

                        <p> <h5>< MailOutlineRoundedIcon />  Mail</h5>
                            <a href="" className="m-left" />abcd@domain.com</p>
                        <p><h5><LocationOnRoundedIcon/> Address</h5><a href="" className="m-left" />EMS House, 9, Ram Gopal Maheshwari Marg, Zone-I, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011</p>
                       <p> <a href="" className="icon i">< FacebookIcon /></a>
                        <a href="" className="icon">< WhatsAppIcon /></a>
                        <a href="" className="icon">< YouTubeIcon /></a></p>
                    </div>
                    
                </div>
            </div>
        </div>

    );
}
export default Details ;