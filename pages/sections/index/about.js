import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Container,Row,Col} from 'reactstrap'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 4}px,${y / 4}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 2 - 160}px,${y / 2 + 120}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 2 - 160}px,${y / 2}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;


const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, []);
    
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

return(
    <section className="app1 about bg-theme" id="about">
        <Container>
            {/* <Row>
                <Col lg="6" md="8"  className="offset-lg-3 offset-md-2">
                    <div className="title title">
                        <div className="main-title">
                            <h2 className="text-white">About Unice</h2>
                        </div>
                        <div className="sub-title">
                           
                        </div>
                    </div>
                </Col>
            </Row> */}
            <Row>
                <Col xl="6" lg="6" sm="12">
                        <div className="center-text">
                            <div>
                                <h3 className="m-b-20 text-white text9">Desarrollador App</h3>
                                <div className="information text-white">
                                    <p className="text-white">Dos años de experiencia en el desarrollo de aplicaciones móviles en 
                                    múltiples plataformas tales como Android studio, xamarin y react native, además de la utilización 
                                    de una gran cantidad de APIs y el consumo de API rest y graphql.</p>
                                </div>
                                <div className="link-horizontal">
                                    <ul>
                                        <li>
                                            <a className="icon-btn">
                                                <i aria-hidden="true" className="fa fa-android center-content shadow"></i>
                                                <h6 className="text-center text-white">android</h6>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="icon-btn">
                                                <i aria-hidden="true" className="fa fa-apple center-content shadow"></i>
                                                <h6 className="text-center text-white">ios</h6>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </Col>
                <Col xl="6" lg="6" sm="12" className="cardssd1" data-aos="fade-left" data-aos-delay="100">
                    <div>
                        <div className="cards1">
                        <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                            <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1)}} />
                            <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2)}} />
                            <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3)}} />
                            <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4)}} />
                        </div>
                        </div>   
                    </div>
                </Col>
            </Row>
        </Container>
        
    </section>
)}


export default About;