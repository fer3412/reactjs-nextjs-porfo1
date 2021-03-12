import React, { useState } from 'react'
import Nav from './nav'
import Link from 'next/link'
import { Container, Row, Col } from 'reactstrap'
import DarkModeToggle from "react-dark-mode-toggle";

const Header = props => {
    const [show, setShow] = useState(false)
    const [sidebar, setSidebar] = useState(false);
    const [search, setSearch] = useState(false);

    const clickSidebar = () => {
        setSidebar(!sidebar)
        document.querySelector('.navbar').classList.add('openSidebar')
    }

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
        <header className={`${props.className || 'app2'} loding-header nav-abs custom-scroll  `}>
            <Container>
                <Row>
                    <Col>
                        <nav>
                            <a className="m-r-auto" href="/">
                                <img alt="" className="img-fluid" src="/assets/images/logo/1.png" />   
                            </a>
                            <div className="responsive-btn">
                                <a className="toggle-nav" onClick={clickSidebar} >
                                    <i aria-hidden="true" className="fa fa-bars text-white"></i>
                                </a>
                            </div>
                            <Nav />
                            <DarkModeToggle
                                onChange={setIsDarkMode}
                                checked={isDarkMode}
                                size={80}
                                />
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
