import React from 'react';
import { Navbar,Nav , Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { sendActiveCat } from "../store/data";

const Status = props => {
  return (
    <div >
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Our store</Navbar.Brand>
    <Nav className="me-auto">
    {props.categoryState.data.categories.map(ele => (<Nav.Link variant="contained" color="secondary"  onClick={() => props.sendActiveCat(ele.name)} id={ele.name} key={ele.name}> {ele.displayName} </Nav.Link >))}
    </Nav>
    </Container>
  </Navbar>

    </div>
  );
}
const mapStateToProps = state => ({
  categoryState: state
});
const mapDispatchToProps = { sendActiveCat } 
export default connect(mapStateToProps, mapDispatchToProps)(Status);

