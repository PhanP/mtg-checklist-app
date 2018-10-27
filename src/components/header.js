import React from 'react'
import { Hero, HeroBody, Container, Title } from 'bloomer'

const Header = ({ siteTitle }) => (
  <Hero isColor="primary" isSize="small">
    <HeroBody>
      <Container hasTextAlign="centered">
        <Title>{siteTitle}</Title>
      </Container>
    </HeroBody>
  </Hero>
)

export default Header
