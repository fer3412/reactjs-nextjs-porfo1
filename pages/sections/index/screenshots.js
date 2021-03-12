import React,{useEffect}  from 'react'
import { Container, Row, Col } from 'reactstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'



const ScreenShots = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, []);

    return (
        <section className="app1 screenshot bg-theme" id="screenshot">
            <Container>
            <Row>
                <Col xl="6" lg="6" sm="12">
                    <div className="center-text">
                        <div>
                            <h3 className="m-b-20 text-white text9">PMM 2018</h3>
                            <div className="information text-white">
                                <p className="text-white">En el 2018 se creó una aplicación para el personal 
                                de la empresa en la plataforma Android studio, el cual consistía en reportar la 
                                entrega de un paquete en tiempo real tomando la posición GPS y una foto del producto, 
                                tiempo después se quería migrar a la plataforma de Ract Native para soporte de múltiples 
                                plataformas como Android y IOS.</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl="6" lg="6" sm="12" className="cardssd1" data-aos="fade-left" data-aos-delay="100">
                    <div className="cards1">
                        <div className="card5"></div>
                        <div className="card4"></div>
                        <div className="card6 card6m"></div>
                         
                    </div>
                </Col>
            </Row>
            </Container>
        </section>
    )
}
export default ScreenShots;