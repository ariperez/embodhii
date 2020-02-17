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
      class={"d-lg-none"}
      src="/embodhii-logo.png"
      fluid
    />
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">Services</Nav.Link>
        <Image
          style={{ maxWidth: "300px" }}
          class={"d-none d-lg-block "}
          src="/embodhii-logo.png"
          fluid
        />
        <Nav.Link href="#link">Blog</Nav.Link>
        <Nav.Link href="#link">FAQ</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
