import React, { useState } from 'react'
import { MENUITEMS } from '../../constant/menu';

import { scroller } from 'react-scroll'

const Nav = () => {

    //const scroller   = Scroll.scroller;
    const [sidebar, setSidebar] = useState(false);

    function closeSidebar() {
        setSidebar(!sidebar)
        document.querySelector('.navbar').classList.remove('openSidebar')
    }

    function onClickL(scrollOne){
        scroller.scrollTo(scrollOne, {
            duration: 1500,
            delay: 100,
            smooth: true,
            // containerId: 'ContainerElementID',
            offset: 50, // Scrolls to element + 50 pixels down the page
            
          })
        
        
      };

    return (
        <div className={`navbar`} id="togglebtn">
            <div className="responsive-btn">
                <a className="btn-back" onClick={closeSidebar}>
                    <h5>back</h5>
                </a>
            </div>
            <ul className="main-menu">
                {
                    // MENUITEMS.slice(0, 3).map((menuItem, i) => {
                    MENUITEMS.map((menuItem, i) => {
                        return (
                            <li key={i} className={` ${menuItem.megaMenu ? 'mega-menu' : ''}`}>
                                
                                {(menuItem.sidebartitle) ?
                                    <div className="dropdown">{menuItem.sidebartitle}</div>
                                    : ''}
                                {(menuItem.type === 'sub') ?
                                    // <a href={menuItem.track}>
                                    <a className="a1" onClick={() => onClickL(menuItem.scroll)}>
                                        <span>{menuItem.title}</span>
                                    </a>
                                    : ''}
                                {/* {(menuItem.type === 'link') ?
                                    <Link
                                        href={`${process.env.PUBLIC_URL}${menuItem.path}`}
                                        className={`${menuItem.active ? 'active' : ''}`}

                                        onClick={() => toggletNavActive(menuItem)}
                                    >
                                        <span>{menuItem.title}</span>
                                        {menuItem.children ?
                                            <i className="fa fa-angle-right pull-right"></i> : ''}
                                    </Link>
                                    : ''} */}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Nav
