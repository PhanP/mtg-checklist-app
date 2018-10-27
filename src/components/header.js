import React from 'react'
import { Hero, HeroBody, Container, Title, Subtitle } from 'bloomer'

const Header = ({ siteTitle, buildDate }) => (
  <Hero isColor="primary" isSize="small">
    <HeroBody>
      <Container hasTextAlign="centered">
        <Title>{siteTitle}</Title>
        <Subtitle>{buildDate}</Subtitle>
      </Container>
    </HeroBody>
  </Hero>
)

export default Header
