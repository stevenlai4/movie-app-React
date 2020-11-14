import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default class Navigation extends Component {
    render() {
        return (
            <div className="sticky-top">
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand href="#home">Movie App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Movie</Nav.Link>
                            <Nav.Link href="#">TV Shows</Nav.Link>
                            <Nav.Link href="#">Latest</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
