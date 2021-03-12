import React from 'react'
import Tilt from 'react-parallax-tilt';
import {Container,Row,Col} from 'reactstrap'

const Banner = () => (
    <section className="app1 header" id="home">
        <div className="app1-header bg">
            <Container>
                <Row>
                    <Col xl="7" lg="7" sm="12">
                        <div className="center-text">
                            <div className="m-at1">
                                <div className="header-text">
                                    <h1 className="text9">Fernando Perez</h1>
                                </div>
                                <div className="header-sub-text">
                                    {/* <h3 className="text-white h3f text9">web development</h3>
                                    <h3 className="text-white h3f text9">mobile development</h3> */}
                                    <h3 className="text-white h3f text9">Desarrollador Web</h3>
                                    <h3 className="text-white h3f text9">Desarrollador App</h3>
                                    
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl="5" lg="5" sm="12" className="cardssd1">
                        <div className="cards1">
                            <div className="card7 card7m floating center-header2"></div>
                            <div className="card8 card8m floating2 center-header2"></div>
                            
                        </div>
                    </Col>
                    {/* <div className="rotate">
                        <Tilt perspective="20000" transitionSpeed="3000">
                            <img alt="" className="img-fluid" src="/assets/images/app_landing1/preview_movie.png" />
                        </Tilt>
                    </div> */}
                    <div className="animation-circle-inverse">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </Row>
            </Container>
        </div>
    </section>
)


export default Banner;