import React from 'react'
import { Navbar, NavbarBrand, NavbarItem } from 'bloomer'

const Header = ({ siteTitle }) => (
  <Navbar style={{ backgroundColor: 'rebeccapurple', margin: '0' }}>
    <NavbarBrand>
      <NavbarItem style={{ color: 'white' }}>{siteTitle}</NavbarItem>
    </NavbarBrand>
  </Navbar>
)

export default Header
