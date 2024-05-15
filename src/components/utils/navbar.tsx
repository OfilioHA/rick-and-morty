import { Navbar, Container, Nav, InputGroup } from "react-bootstrap"
import { Form, Button } from 'react-bootstrap';

export function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-secondary border-bottom border-primary">
            <Container className="py-2">
                <Navbar.Brand href="#home" className="fw-bolder text-primary">Rick and Morty</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Characters</Nav.Link>
                        <Nav.Link href="#link">Locations</Nav.Link>
                        <Nav.Link href="#link">Episodes</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <InputGroup className="ms-3">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                className="p-2 lh-1"
                            />
                            <Button variant="outline-secondary" className="py-2 px-3">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </Button>
                        </InputGroup>
                        <Button className="ms-3" variant="outline-primary">
                            <i className="fa-solid fa-moon fa-xl"></i>
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}