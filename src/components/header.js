import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Image from "react-bootstrap/Image"

const Header = ({ siteTitle }) => (
  <Navbar bg="light" expand="lg">
    <Image
      style={{ maxWidth: "200px" }}
      class={"d-lg-none d-xl-none "}
      src="/embodhii-logo.png"
      fluid
    />
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about/">About</Nav.Link>
        <Nav.Link href="/services/">Services</Nav.Link>

        <Image
          style={{ maxWidth: "300px" }}
          class={"d-xs-none d-sm-none d-md-none"}
          src="/embodhii-logo.png"
          fluid
        />
        <Nav.Link href="/blog/">Blog</Nav.Link>
        <Nav.Link href="/faq/">FAQ</Nav.Link>
        <Nav.Link href="/contact/">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
