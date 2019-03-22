import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { SocialIcon } from 'react-social-icons';
import "./about.css";

export class About extends React.Component {

    render() {
        return (
            <Container>
                <br />
                <br />
                <Card>
                    <Card.Body>
                        <h1>Hi there!</h1>
                        <div id="text">
                            <p>I'm Alvin Yang; a programmer with experience in web and game development.</p>
                            <p>In web development I have experience using AngularJS with MongoDB and StrongLoop LoopBack at <a href="https://pinpinman.com">pinpinman.com</a>. Outside of that I have experience using ReactJS, mySQL, and a little bit of PHP.</p>
                            <p>In game development I've used a variety of engines and frameworks including Godot Game Engine, Unreal Engine 4, Simple Fast Media Library, and OpenGL with SDL.</p>
                            <p>You can find my resume <a href="https://drive.google.com/file/d/1H_28Xsa7zXuhskQsuwgkIFmyl1RTy3sR/view?usp=sharing">here</a>. If you want to reach out to me for any inquiries you can <a href="mailto:alvin.yang73@gmail.com">email</a> me.</p>
                        </div>
                    </Card.Body>
                </Card>
                <div className="footer">
                    <div className="footerIcons">
                        <SocialIcon url="https://www.linkedin.com/in/yangalvin/" />
                        <SocialIcon url="https://github.com/vindow" />
                        <SocialIcon url="mailto:alvin.yang73@gmail.com" />
                    </div>
                </div>
            </Container>
        );
    }
}