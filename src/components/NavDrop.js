import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'



function NavDrop() {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="World" id="basic-nav-dropdown" style={{borderRight:'1px solid #ccc', padding:'8px'}}>
                    <NavDropdown.Item href="/">Action</NavDropdown.Item>
                    <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="/">Something</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Following" id="basic-nav-dropdown" style={{borderRight:'1px solid #ccc', padding:'8px'}}>
                    <NavDropdown.Item href="/">Action</NavDropdown.Item>
                    <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="/">Something</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Popular" id="basic-nav-dropdown" style={{borderRight:'1px solid #ccc', padding:'8px'}}>
                    <NavDropdown.Item href="/">Action</NavDropdown.Item>
                    <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="/">Something</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Post" id="basic-nav-dropdown" style={{borderRight:'1px solid #ccc', padding:'8px'}}>
                    <NavDropdown.Item href="/">Action</NavDropdown.Item>
                    <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="/">Something</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Gender" id="basic-nav-dropdown" style={{borderRight:'1px solid #ccc', padding:'8px'}}>
                    <NavDropdown.Item href="/">Action</NavDropdown.Item>
                    <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="/">Something</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavDrop