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
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { blueGrey, deepOrange, green, lightGreen } from "@material-ui/core/colors";
import { Reddit } from "@material-ui/icons";
// import { Details } from "@material-ui/icons";

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
                                        <button  type="submit" className="btn  btn-primary btn-lg btn-block">Submit</button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>


                </div>
                <div className="dtails   bkgrd m-top m-btm color-white" >
                    <h3 className="mt text-center">Contact Information</h3><br/>
                    {/* <p className="pa text-center"> Contact Us For Any Queries</p> */}
                    <div className="text-center">

                        <p><h6 > < PhoneAndroidIcon  style={{ color: blueGrey[100] }}/><a href="" className="m-left " />+91-9516247583</h6></p>

                        <p> <h6>< MailOutlineRoundedIcon  style={{ color: blueGrey[100] }}/>
                            <a href="" className="m-left" />abhi85558@yahoo.co.in </h6></p>
                            <p className="d-flex flex-row">   <h6>< PinDropIcon  style={{ color: blueGrey[100] }}/><a href="" className="text-start m-left" />130, Mangal Murthi Nagar Scheme No 77, Indore 452018 Madhya Pradesh</h6></p>
                       <p> <a href="" className="icon i">< FacebookIcon  style={{ color: blueGrey[100] }} /></a>
                        <a href="" className="icon">< WhatsAppIcon  style={{ color: blueGrey[100] }} /></a>
                        <a href="" className="icon">< YouTubeIcon  style={{ color: blueGrey[100] }} /></a></p>
                    </div>
                    
                </div>
            </div>
        </div>

    );
}
export default Details ;