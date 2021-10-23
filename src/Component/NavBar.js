import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import { NavWrapper } from './NavWrapper'

export default class   extends Component {
    render() {
        return <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 justify-content-between">
           { /* 
           https://www.iconfinder.com/icons/1243689/call_phone_icon
           Creative Commons (Attribution 3.0 Unported);
           https://www.iconfinder.com/Makoto_msk */}
           <Link to="/">
               <img src={logo} alt="store" className="navbar-brand" />
           </Link>
           <ul className="navbar-nav align-items-center">
               <li className="nav-item ml-5">
                   <Link to="/" className="nav-link">
                       products
                   </Link>
               </li>
           </ul>
           <Link to="/store" className="ml-auto">
               <ButtonContainer>
                  <span className="mx-2">
                      <i className="fas fa-cart-plus" />
                  </span>
                  my cart
               </ButtonContainer>
           </Link>
        </NavWrapper>
    }
}


