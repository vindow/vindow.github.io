import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { About } from './pages/about';
import { Projects } from './pages/projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Navbar bg="dark" expand="lg" variant="dark">
            <LinkContainer to="/">
              <Navbar.Brand>Alvin Yang</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/about">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/projects">
                  <Nav.Link>Projects</Nav.Link>
                </LinkContainer>
                <Nav.Link href="https://drive.google.com/file/d/1H_28Xsa7zXuhskQsuwgkIFmyl1RTy3sR/view" target="_blank">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
