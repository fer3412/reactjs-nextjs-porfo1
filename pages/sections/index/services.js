import React, { useState, useEffect } from "react";
import {Container,Row,Col, Button } from 'reactstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Tilt from 'react-parallax-tilt';
import Tooltip from "react-simple-tooltip";

import { skills } from '../../../database/elements/logos/database';

const Services = () =>{

const Lgc = "3";
const Mdc = "4";
const Smc = "6";
const Widthc = "60%";

useEffect(() => {
    AOS.init({
        duration: 2000
    })
}, []);

//const [loadst, setloadst] = useState(true);
const [counte, setcounte] = useState(12);

const loadClick = (checked) => {
    //setloadst( checked );
    if(checked){
        setcounte(12);
    }else{
        setcounte(18);
    }
  };


 return(
    <section className="services" id="service">
        <Container>
            <Row>
                <Col md="12">
                    <div className="title">
                        <div className="main-title">
                            <h2>Habilidades</h2>
                        </div>
                        
                    </div>
                </Col>
                {skills.slice(0,counte).map((skill, index) =>
                    <Col lg={Lgc} md={Mdc} sm={Smc} key={index}>
                        <Tooltip content={skill.title}>
                            <div className="service service-overlay2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000">
                                <Tilt scale={1.5} transitionSpeed={2500}>
                                    <img alt="" src={skill.img} width={Widthc} />
                                </Tilt>
                            </div>

                        </Tooltip>
                    </Col>
                    )}
                {/* <Col lg ={Lgc} md={Mdc} sm={Smc} data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000">
                    <Tooltip content={skills[0].title}>
                        <div className="service service-overlay2">
                            <Tilt scale={1.5} transitionSpeed={2500}>
                                <img alt="" src={skills[0].img} width={Widthc} />
                            </Tilt>
                        </div>

                    </Tooltip>    
                </Col>
                <Col lg ={Lgc} md={Mdc} sm={Smc} data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000">
                    <Tooltip content={skills[1].title}>
                        <div className="service service-overlay2">
                            <Tilt scale={1.5} transitionSpeed={2500}>
                                <img alt="" src={skills[1].img} width={Widthc} />
                            </Tilt>
                        </div>

                    </Tooltip>    
                </Col>
                <Col lg ={Lgc} md={Mdc} sm={Smc} data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000">
                    <Tooltip content={skills[2].title}>
                        <div className="service service-overlay2">
                            <Tilt scale={1.5} transitionSpeed={2500}>
                                <img alt="" src={skills[2].img} width={Widthc} />
                            </Tilt>
                        </div>

                    </Tooltip>    
                </Col>
                <Col lg ={Lgc} md={Mdc} sm={Smc} data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000">
                    <Tooltip content={skills[3].title}>
                        <div className="service service-overlay2">
                            <Tilt scale={1.5} transitionSpeed={2500}>
                                <img alt="" src={skills[3].img} width={Widthc} />
                            </Tilt>
                        </div>

                    </Tooltip>    
                </Col>
                <Col lg ={Lgc} md={Mdc} sm={Smc} data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000">
                    <Tooltip content={skills[4].title}>
                        <div className="service service-overlay2">
                            <Tilt scale={1.5} transitionSpeed={2500}>
                                <img alt="" src={skills[4].img} width={Widthc} />
                            </Tilt>
                        </div>

                    </Tooltip>    
                </Col>
                <Col lg ={Lgc} md={Mdc} sm={Smc} data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000">
                    <Tooltip content={skills[5].title}>
                        <div className="service service-overlay2">
                            <Tilt scale={1.5} transitionSpeed={2500}>
                                <img alt="" src={skills[5].img} width={Widthc} />
                            </Tilt>
                        </div>

                    </Tooltip>    
                </Col>
                <Col lg ={Lgc} md={Mdc} sm={Smc} data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000">
                    <Tooltip content={skills[6].title}>
                        <div className="service service-overlay2">
                            <Tilt scale={1.5} transitionSpeed={2500}>
                                <img alt="" src={skills[6].img} width={Widthc} />
                            </Tilt>
                        </div>

                    </Tooltip>    
                </Col>
                <Col lg ={Lgc} md={Mdc} sm={Smc} data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000">
                    <Tooltip content={skills[7].title}>
                        <div className="service service-overlay2">
                            <Tilt scale={1.5} transitionSpeed={2500}>
                                <img alt="" src={skills[7].img} width={Widthc} />
                            </Tilt>
                        </div>

                    </Tooltip>    
                </Col>
                <Col lg ={Lgc} md={Mdc} sm={Smc} data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000">
                    <Tooltip content={skills[8].title}>
                        <div className="service service-overlay2">
                            <Tilt scale={1.5} transitionSpeed={2500}>
                                <img alt="" src={skills[8].img} width={Widthc} />
                            </Tilt>
                        </div>

                    </Tooltip>    
                </Col>
                <Col lg ={Lgc} md={Mdc} sm={Smc} data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000">
                    <Tooltip content={skills[9].title}>
                        <div className="service service-overlay2">
                            <Tilt scale={1.5} transitionSpeed={2500}>
                                <img alt="" src={skills[9].img} width={Widthc} />
                            </Tilt>
                        </div>

                    </Tooltip>    
                </Col>
                <Col lg ={Lgc} md={Mdc} sm={Smc} data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000">
                    <Tooltip content={skills[10].title}>
                        <div className="service service-overlay2">
                            <Tilt scale={1.5} transitionSpeed={2500}>
                                <img alt="" src={skills[10].img} width={Widthc} />
                            </Tilt>
                        </div>

                    </Tooltip>    
                </Col>
                <Col lg ={Lgc} md={Mdc} sm={Smc} data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000">
                    <Tooltip content={skills[11].title}>
                        <div className="service service-overlay2">
                            <Tilt scale={1.5} transitionSpeed={2500}>
                                <img alt="" src={skills[11].img} width={Widthc} />
                            </Tilt>
                        </div>

                    </Tooltip>    
                </Col> */}
                {/* {loadst ? (
                    <Col md="12" >
                        <div className="title p-t-40">
                            <Button color="primary" size="lg" onClick={() => loadClick(false)} >Mostrar mas</Button>
                        </div>
                    </Col>
                ) : (
                    skills.map((skill, index) =>
                        index > 11 ?
                            <Col lg={Lgc} md={Mdc} sm={Smc}>
                                <Tooltip content={skill.title}>
                                    <div className="service service-overlay2" key={index} data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000">
                                        <Tilt scale={1.5} transitionSpeed={2500}>
                                            <img alt="" src={skill.img} width={Widthc} />
                                        </Tilt>
                                    </div>

                                </Tooltip>
                            </Col>
                            : ''
                    ) 
                )} */}
                {counte == 12 ? (
                    <Col md="12" >
                        <div className="title p-t-40">
                            <Button color="primary" size="lg" onClick={() => loadClick(false)} >Mostrar mas</Button>
                        </div>
                    </Col>
                ) : (
                    <Col md="12" >
                        <div className="title p-t-40">
                            <Button color="primary" size="lg" onClick={() => loadClick(true)} >Mostrar menos</Button>
                        </div>
                    </Col>
                )}

                
                {/* <Col md="4">
                    <div className="service service-overlay">
                        <div className="img-block">
                            <img alt="" className="service-img img-fluid" src="/assets/images/app_landing1/icons/1-2.png" />
                        </div>
                        <div className="service-feature">
                            <h4 className="feature-text">Personalization</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the ma- jority have
                                suffered.</p>
                        </div>
                    </div>
                </Col>
                <Col md="4">
                    <div className="service service-overlay">
                        <div className="img-block">
                            <img alt="" className="service-img img-fluid" src="/assets/images/app_landing1/icons/1-3.png" />
                        </div>
                        <div className="service-feature">
                            <h4 className="feature-text">Ease Of Access</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the ma- jority have
                                suffered.</p>
                        </div>
                    </div>
                </Col> */}
            </Row>
        </Container>
    </section>
)}


export default Services;