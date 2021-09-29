import React ,{ useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { sendActiveCat } from "../store/data";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import Button from '@restart/ui/esm/Button';
// import { removeItem } from '../store/cart';
import * as actions from "../store/actions";


const Status = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

    useEffect(async () => {
        await props.get()
    },props.updateCardData)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);
  return (
    <div >
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Our store</Navbar.Brand>
          <Nav className="me-auto">
            {props.categoryState.dataa.categories.map(data =>
            (<Nav.Link variant="contained" color="secondary"
            onClick={() => props.changeActiveCategory(data.name)}
              id={data.name} key={data.name}>  {data.displayName} </Nav.Link >))}
          </Nav>
        
          <IconButton aria-label="cart" onClick={handleClick}>
            <StyledBadge badgeContent={props.categoryState.card.totalItems} color="secondary">
              <ShoppingCartIcon />

            </StyledBadge>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {props.categoryState.card.items.map(data => {
              return <MenuItem style={{ width: 200 }} onClick={handleClose} id={data.name} key={data.name}>{data.name} quantity :  {data.quantity} <Button variant="danger" 
             
              onClick={()=>props.remove(props.categoryState.dataa.products.filter((item)=>item.name==data.name ) )}
               style={{backgroundColor:"red" , borderRadius :"100%" , color:"white" ,  marginLeft:"12px"}}
                >   X </Button>
              
              
               </MenuItem >
            })}
          </Menu>
        </Container>
      </Navbar>


    </div>
  );
}

const mapStateToProps = state => ({
  
  categoryState: state
});


const mapDispatchToProps =  (dispatch, getState) => ({
  get: (activeCategory) => dispatch(actions.getRemoteData(activeCategory)),
  remove :(removeFromCard)=>dispatch(actions.removeCardData(removeFromCard)),
  changeActiveCategory: (activeCategory) => dispatch(actions.changeActiveCategory(activeCategory)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Status);

