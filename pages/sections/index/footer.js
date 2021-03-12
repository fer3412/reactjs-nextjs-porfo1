import React, { useState } from 'react'
import {Container,Row,Col} from 'reactstrap';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { RandomReveal } from 'react-random-reveal'
import {  decode } from 'js-base64';

const Footer = () => {
    const [open, setOpen] = useState(false);

    const code1 = "RmVybmFuZG8zNHB6QGdtYWlsLmNvbQ==";
    const deco1 = decode(code1);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    

    return (
        <section className="app1 videos bg-theme">
            <Container>
                <Row>
                    <Col lg="12" md="12" >
                        <div className="title title">
                            <div className="main-title">
                                <h2 className="text-white">Contacto</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <div className="socials-lists m-t-10 m-b-40">
                            <ul className="socials-horizontal justify-content-center">
                                <li>
                                    <a href="https://www.facebook.com/fernando.perez.33886/" target="_blank">
                                        <i aria-hidden="true" className="fa fa-facebook center-content"></i>
                                    </a>
                                </li>
                                {/* <li>
                                    <a href="#">
                                        <i aria-hidden="true" className="fa fa-twitter center-content"></i>
                                    </a>
                                </li> */}
                                <li>
                                    <a onClick={onOpenModal}>
                                        <i aria-hidden="true" className="fa fa-google center-content"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/fernando_34rs/" target="_blank">
                                        <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <Modal open={open} onClose={onCloseModal} center>
                            <h2 className="p-01">
                                <RandomReveal
                                isPlaying
                                duration={2}
                                revealDuration={1}
                                characters={deco1}
                                />
                            </h2>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <div className="center-content">
                            <div>
                                <h6 className="copyright-text text-white">Copyright © 2021, Development by Fernando Perez</h6>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )
}


export default Footer;