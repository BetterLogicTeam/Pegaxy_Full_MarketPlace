import React, { useEffect, useState } from 'react'
import './Header_MP.css'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { FiArrowUpRight } from 'react-icons/fi'
import { loadWeb3 } from '../../apis/api'

export default function Header_MP() {
    let [btnTxt, setBtTxt] = useState("Connect")

    const getAccount = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            setBtTxt("No Wallet")
        }
        else if (acc == "Wrong Network") {
            setBtTxt("Wrong Network")
        } else {
            let myAcc = acc?.substring(0, 8) + "..." + acc?.substring(acc?.length - 8);
            setBtTxt(myAcc);
  
        }
    }
  
    useEffect(() => {
        setInterval(() => {
            getAccount();
        }, 1000);
    }, []);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  className='Navbar_marketplace position-fixed'>
                < >
                    <Navbar.Brand href="#home" className="navBrand">  <img src="pegaxy.png  " alt="" width="100%" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navToggle_here' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mt-n1 navbar_linkes_main">
                            <div className="dropdown-filter dropdown">
                                <button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" className="dropdown-toggle btn btn-link nav_linkbtn" data-bs-toggle="dropdown">MENU</button>
                                <ul className="dropdown-menu navbarDropdown">
                                    <li><a href="#" className='Navbar_Link_mp'><span>HOME PAGE</span> <FiArrowUpRight /></a></li>
                                    <li><a href="#" className='Navbar_Link_mp'><span>PEGAXY WEB GAME</span> <FiArrowUpRight /></a></li>
                                    <li><a href="#" className='Navbar_Link_mp'><span>APOLLO DATA TRACKING</span> <FiArrowUpRight /></a></li>
                                    <li><a href="#" className='Navbar_Link_mp'><span>THEMIS</span> <FiArrowUpRight /></a></li>
                                    <li><a href="#" className='Navbar_Link_mp'><span>ARES</span> <FiArrowUpRight /></a></li>
                                    <li><a href="#" className='Navbar_Link_mp'><span>FAQ</span> <FiArrowUpRight /></a></li>
                                </ul>
                            </div>

                            <div className="dropdown-filter dropdown">
                                <button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" className="dropdown-toggle btn btn-link nav_linkbtn" data-bs-toggle="dropdown">Buy/Swap Crypto</button>
                                <ul className="dropdown-menu navbarDropdown2">
                                    <li><a href="#" className='Navbar_Link_mp'><span>PURCHASE CRYPTO WITH CARD</span> <FiArrowUpRight /></a></li>
                                    <li><a href="#" className='Navbar_Link_mp'><span>PURCHASE VIS VIA KYBERSWAP</span> <FiArrowUpRight /></a></li>
                                    <li><a href="#" className='Navbar_Link_mp'><span>PURCHASE PGX VIA KYBERSWAP</span> <FiArrowUpRight /></a></li>
                                </ul>
                            </div>


                            

                        </Nav>
                        <Nav.Link eventKey={2} href="#memes">
                        <button type="button" className="animated-button btn btn-outline-primary">{btnTxt}</button>
                            
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        <button type="button" className="animated-button btn btn-primary">PLAY NOW</button>
                            
                        </Nav.Link>

                    </Navbar.Collapse>
                </>
            </Navbar>




        </div>
    )
}
