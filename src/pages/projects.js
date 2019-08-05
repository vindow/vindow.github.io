import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import { SocialIcon } from 'react-social-icons';
export class Projects extends React.Component {

    render() {
        return (
            <Container>
                <br />
                <br />
                <h1>Projects</h1>
                <p>Here some some of the projects I've made over the years. Some of them don't have a demo because they aren't quite as fleshed out in feature and/or functionality as I'd like.</p>
                <CardColumns>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="img/ctype.gif" />
                        <Card.Body>
                            <Card.Title>C|TYPE</Card.Title>
                            <Card.Text>
                                A typing game created in Godot Game Engine for a game jam.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/vindow/C-TYPE">Github</Card.Link>
                            <Card.Link href="https://durbo.itch.io/ctype">Demo</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="img/gameoflife.png" />
                        <Card.Body>
                            <Card.Title>Game of Life Simulator</Card.Title>
                            <Card.Text>
                                A Conway's Game of Life Simulator created in ReactJS.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/vindow/game-of-life">Github</Card.Link>
                            <Card.Link href="https://vindow.github.io/game-of-life/">Demo</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="img/calendar.png" />
                        <Card.Body>
                            <Card.Title>Planner</Card.Title>
                            <Card.Text>
                                A basic calendar/planner created in ReactJS.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/vindow/Calendar">Github</Card.Link>
                            <Card.Link href="https://vindow.github.io/Calendar/">Demo</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Discord Bot</Card.Title>
                            <Card.Text>
                                A simple Discord App bot created using Python with simple chat commands to generate random results and created polls.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/vindow/garbo-bot">Github</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="img/notenoughbullets.png" />
                        <Card.Body>
                            <Card.Title>Not Enough Bullets!</Card.Title>
                            <Card.Text>
                                A shoot-em-up game without bullets created for a game jam using Godot Game Engine.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/vindow/not-enough-bullets-gmtk">Github</Card.Link>
                            <Card.Link href="https://durbo.itch.io/not-enough-bullets">Demo</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Battle Tank</Card.Title>
                            <Card.Text>
                                A third person tank game created in Unreal Engine 4.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/vindow/BattleTank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Testing Grounds</Card.Title>
                            <Card.Text>
                                A procedurally generated first-person shooter created in Unreal Engine 4.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/vindow/TestingGrounds">Github</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="img/lifeismoney.jpg" />
                        <Card.Body>
                            <Card.Title>Life is Money</Card.Title>
                            <Card.Text>
                                A shoot-em up-game with a health-as-ammo mechanic created for a game jam using Godot Game Engine.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/vindow/life-is-money">Github</Card.Link>
                            <Card.Link href="https://durbo.itch.io/life-is-money">Demo</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="img/superpongout.jpg" />
                        <Card.Body>
                            <Card.Title>Super Pongout</Card.Title>
                            <Card.Text>
                                A two player Pong/Breakout hybrid created using Godot Game Engine
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/vindow/super-pongout">Github</Card.Link>
                            <Card.Link href="https://durbo.itch.io/super-pongout">Demo</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="img/dodgeandload.png" />
                        <Card.Body>
                            <Card.Title>Dodge and Load</Card.Title>
                            <Card.Text>
                                A loading screen game based around dodging created for a Game Jame using C++ with Simple Fast Media Library
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/vindow/Dodge-and-Load">Github</Card.Link>
                            <Card.Link href="https://durbo.itch.io/dodge-and-load">Demo</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="img/tanks.png" />
                        <Card.Body>
                            <Card.Title>Tanks</Card.Title>
                            <Card.Text>
                                A two player tank game created using Three.js.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/vindow/Tanks">Github</Card.Link>
                            <Card.Link href="https://durbo.itch.io/tanks">Demo</Card.Link>
                        </Card.Body>
                    </Card>
                </CardColumns>
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