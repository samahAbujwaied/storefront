import React from 'react';
import { Navbar,Nav , Container } from 'react-bootstrap';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { sendActiveCat } from "../store/data";

const Status = props => {
  console.log('mapStateToProps---',props.categoryState);
  return (
    <div >
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Our store</Navbar.Brand>
    <Nav className="me-auto">
    {props.categoryState.dataa.categories.map(data => 
    (<Nav.Link variant="contained" color="secondary"  
    onClick={() => props.sendActiveCat(data.name)} 
    id={data.name} key={data.name}> {data.displayName} </Nav.Link >))}
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

