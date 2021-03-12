import React,{useEffect, useState} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Container,Row,Col} from 'reactstrap'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10 - 120}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 4 - 120}px,${y / 4}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 2 + 160}px,${y / 2 + 60}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 2 + 160}px,${y / 2 - 60}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 3.5 - 120}px,${y / 3.5}px,0)`;



const Download = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, []);

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    if(isDarkMode){ 
        if (process.browser) {
        document.body.classList.add('dark');
        }
    }else{
        if (process.browser) {
        document.body.classList.remove('dark');
        }
    }

    return (
        <section className="app1 download">
            <Container>
                <Row>
                    <Col xl="6" lg="6" sm="12" className="cardssd1" data-aos="fade-right" data-aos-delay="100">
                        
                            <div className="cards1">
                            <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                                <animated.div className="card1lp" style={{ transform: props.xy.interpolate(trans1)}} />
                                <animated.div className="card2lp" style={{ transform: props.xy.interpolate(trans2)}} />
                                <animated.div className="card3lp" style={{ transform: props.xy.interpolate(trans3)}} />
                                <animated.div className="card4lp" style={{ transform: props.xy.interpolate(trans4)}} />
                                <animated.div className="card5lp" style={{ transform: props.xy.interpolate(trans5)}} />
                            </div>
                            </div>   
                        
                    </Col>
                    <Col xl="6" lg="6" sm="12">
                        <div className="center-text">
                            <div>
                                <h3 className="m-b-20 text9">Desarrollador Web</h3>
                                <div className="information">
                                    <p>Dos años de experiencia en el desarrollo web front end utilizando distintos 
                                        tipos de tecnologías como react js con next js, JavaScript, php y el maquetado 
                                        con css. En la parte del back end utilizando node js, express y amazon web services.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <Container>
                <Row>
                    <Col lg="5" md="6" data-aos="fade-right" data-aos-delay="100">
                        <div className="center-content center-mobile">
                            <img alt="" className="img-fluid" src="/assets/images/app_landing1/mobile.png" />
                        </div>
                    </Col>
                    <Col lg="6" md="6" className="offset-lg-1">
                        <div className="center-text">
                            <div>
                                <div className="download-img">
                                    <div className="set-relative">
                                        <img alt="" className="download-icon img-fluid"
                                            src="/assets/images/app_landing1/download/download.png" />
                                        <div className="set-abs elipse center-abs">
                                            <img alt="" src="/assets/images/app_landing1/download/Ellipse.png" />
                                        </div>
                                    </div>
                                    <div className="center-img-content m-l-15">
                                        <h3 className="m-b-5">download</h3>
                                        <p>the Unice</p>
                                    </div>
                                </div>
                                <div className="information">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                        do eiusmod tempor unt ut labore et
                                        dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud ercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo
                                        consequat.Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur
                                        sint
                                        occaecat cupidatat non proident, sunt in culpa.</p>
                                </div>
                                <div className="link-horizontal">
                                    <ul>
                                        <li>
                                            <a className="icon-btn">
                                                <i aria-hidden="true" className="fa fa-android center-content shadow"></i>
                                                <h6 className="text-center font-primary">android</h6>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="icon-btn">
                                                <i aria-hidden="true" className="fa fa-apple center-content shadow"></i>
                                                <h6 className="text-center font-primary">ios</h6>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container> */}
        </section>
    )
}



export default Download;