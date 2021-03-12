import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
//import PriceOne from '../../elements/price/element/price1';
import {Container,Row,Col} from 'reactstrap'

const Price = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, []);

return(   
    <section className="app1 pricing mb-0" id="plan">
        <Container>
            <Row>
                <Col xl="6" lg="6" sm="12" className="cardssd1" data-aos="fade-right" data-aos-delay="100">
                    <div className="cards1">
                        <div className="card6lp card6lpm"></div>
                        <div className="card5lp card5lpm"></div>
                        <div className="card3lp card3lpm"></div>
                    </div> 
                </Col>
                <Col xl="6" lg="6" sm="12">
                    <div className="center-text">
                        <div>
                            <h3 className="m-b-20 text9">Electromaritima 2017</h3>
                            <div className="information">
                                <p>En el 2017 la empresa actualizo su página para migrar a la plataforma 
                                    React Native utilizando tecnologías como node js y express js en back end, 
                                    el cual se tenía pensado crear una tienda en línea para vender equipo electrónico marino.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)}


export default Price;