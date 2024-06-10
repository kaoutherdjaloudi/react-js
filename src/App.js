import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import BasicExample from './BasicExample'; 

const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap App</Navbar.Brand>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <h1 className="text-primary">Welcome to My React Bootstrap App</h1>
          <Row>
            <Col>
              <BasicExample />
            </Col>
            <Col>
              <BasicExample />
            </Col>
            <Col>
              <BasicExample />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default App;
