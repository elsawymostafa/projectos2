import React, { useContext } from 'react';

import $ from 'jquery';
import 'jquery';

import { NumCountContext } from '../App';

function Header(props) {





    var clicked = false;
    let searchInp = () => {
        if (clicked === true) {
            clicked = false;
            $("#searchinput").css({
                // "display": "block",
                "opacity": "1",
                "transition": "1s"

            });
        } else {
            clicked = true;
            $("#searchinput").css({
                // "display": "none",
                "opacity": "0",
                "transition": "1s"

            });
        }
    }






 
 

    window.addEventListener('scroll', () => {
        // console.log(window.scrollY);
        if (window.scrollY > 50) {
            $("#navbar").css({
                "position": "fixed",
                "background": "rgba(17, 17, 17, 0.705)",
                "top": "0",
                "width": "100%",
                "z-index": "999",
                "transition": "all 1s ease-in-out",
            }
            );

        } else {
            $("#navbar").css({
                "transition": "all 1s ease-in-out",
                "position": "relative",
                "top": "10",
                "width": "100%",
                "z-index": "999",
            });
        }
    })
    // const [state, dispatch] = useReducer(reducer, initialState, init)

   


    const countnum = useContext(NumCountContext);

    return (
        <>
            <header>
                <div className="container-fluid bg-dark d-flex justify-content-between ">
                    <div className="content ">
                        <a href="tel:+01123309866"><i className="fas fa-mobile"></i> <span>01123309866</span></a>
                        <a href="mailto:mohammedalinossir011233@gmail.com"><i className="fa fa-envelope"></i> <span>mohammedalinossir011233@gmail.com</span></a>
                    </div>
                    <div className="dropdown d-inline-block">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Thailand
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">Arabic</button>
                            <button className="dropdown-item" type="button">English</button>
                            <button className="dropdown-item" type="button">German</button>
                        </div>
                    </div>
                </div>


                <nav className="navbar navbar-expand-lg navbar-dark " id="navbar">
                    <a className="navbar-brand" href="index.html"><img src="media/logo3.png" alt=""></img></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ">
                            <li className="nav-item active">
                                <a className="nav-link " href="index.html">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#shoping">Shop</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Product
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#!">Watches</a>
                                    <a className="dropdown-item" href="#!">Parfume</a>
                                    <a className="dropdown-item" href="#!">Accessories</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#!">All product</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#!" tabIndex="-1" aria-disabled="true">Pages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#!" tabIndex="-1" aria-disabled="true">Elements</a>
                            </li>
                            <li className="nav-item">

                                <a className="nav-link " href="#!" tabIndex="-1" aria-disabled="true">Sale</a>
                            </li>
                        </ul>

                    </div>


                    <form className="form-inline my-2 my-lg-0">
                        <i className="fas fa-search searchBtn" onClick={searchInp}></i>
                        <i className="far fa-user "></i>
                        <i className="fas fa-heart "></i>
                        <i className="fas fa-shopping-bag " > <span>{countnum}</span></i>
                        <input className="form-control mr-sm-2 position-absolute searchinput" id="searchinput" type="search" placeholder="Search" aria-label="Search" ></input>

                    </form>
                </nav>

            </header>
        </>
    )
}


export default Header;
