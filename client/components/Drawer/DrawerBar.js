import React, { Component } from 'react'
import {
  Collapse,
  Navbar as DrawerHeader,
  NavbarToggler as HeaderToggler,
  NavbarBrand as HeaderText,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import DrawerContainer from './DrawerContainer'

import 'bootstrap/dist/css/bootstrap.css'
import '../../../public/style/drawer.css'
import '../../../public/style/drawer-contents.css'

export default class DrawerBar extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = event => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const getDrawerBarCSS = () => {
      return this.state.open ? 'drawer-bar-open' : 'drawer-bar-closed'
    }

    return (
      <div className={ getDrawerBarCSS() }>
        <DrawerHeader color="faded" light>
          <HeaderToggler onClick={ this.handleClick } className="mr-2 nav-toggle" />
          <HeaderText href="/" className="mr-auto">
            <h1 className="code-mode-logo">
              > CodeMode
            </h1>
          </HeaderText>
          <Collapse isOpen={ this.state.open } navbar>
            <DrawerContainer />
          </Collapse>
        </DrawerHeader>
      </div>
    )
  }
}
