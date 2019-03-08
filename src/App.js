import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Home } from './pages/home';
import { About } from './pages/about';
import { Projects } from './pages/projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
              <Navbar.Brand>Alvin Yang</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/projects">
                  <Nav.Link>Projects</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
