import React, { useState } from 'react';
import styled from "styled-components";
import logo from './static/kpmg_logo.png';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`
    border-bottom: 2.3px solid #00338d;
    background-color: ${props => props.bgColor || "white"};
    position: relative;
    padding: 1rem;
    box-shadow: ${props => props.boxShadow || "4px 0px 40px #dbdbdb"};
    a {
        text-decoration: none;
        color: inherit;
    }
    span{
        color: #00338d;
    }
    .nav-btn{
        color: gray;
        &:hover{
            color: #00338d;
        }
    }
    .modal-background{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 57rem;
        z-index: 99;
    }
`;

const StyledModal = styled.div`
    display: ${props => props.hidden ? "none" : ""};
    position: absolute;
    left: 350px;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 4px;
    background-color: white;
    overflow: hidden;
    z-index: 100;   
`;

export default function Header({ subtitle, boxShadow, bgColor, menus, jsonBuilder }) {
    const [hidden, setHidden] = useState(true);
    const toggleHidden = () => {
        setHidden(!hidden);
    }

    return (
        <StyledContainer className="navbar navbar-light" boxShadow={boxShadow ? "4px 0px 40px #dbdbdb" : "none"} bgColor={bgColor}>
            <div>
                <a href="/" className="align-middle">
                    <span><img alt="kpmg" src={logo} width="55px" /></span>
                    <span className="ml-2 mr-5 align-middle">{subtitle}</span>
                </a>
                <span className="ml-5 align-middle btn" onClick={toggleHidden}>
                    <span className="ml-4 nav-btn">Sample</span>
                    <div className="modal-background" hidden={hidden}></div>
                    <StyledModal hidden={hidden}>
                        {/* xs={integer} => width:(xs*24)px;, padding="string(top right bottom left)", alignItems="string"(horizontal) justifyContent="string"(vertical), margin="string(top right bottom left)", border="string"(only border-right), menus={array of {name:"string", link:"string",desc:"string"}} */}
                        <NavBar xs={9} menus={menus} />
                    </StyledModal>
                </span>

                <span className="ml-4 align-middle btn">
                    <Link to={jsonBuilder.link}><span className="nav-btn">JSON Builder</span></Link>
                </span>

            </div>
        </StyledContainer>
    );
}