import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col ,Button } from 'react-bootstrap'
import './profucts.css'
import * as actions from "../store/cart";
// import  * as actions from '../store/cart';
// import { addItem } from "../store/cart"

const Status = props => {
    // console.log(props.categoryState.dataa)
    // console.log('proopppooopopopo----------------',props.addItem('d'));
    return (
        <Row>
            {props.categoryState.dataa.products.map(data => {
                if (data.category === props.categoryState.dataa.activeCategory)
                    return (
                        <Col className="cardMinu" sm={4}>
                            <Card key={data.name} style={{ backgroundColor: "pink", borderRadius: "5%", borderColor: "black", borderBlockStyle: "solid" }} >
                                <div className="col-12  col-lg-3 " >

                                    <Card.Img style={{ width: '225px', height: '255px', marginLeft: "100px", marginTop: "12px" }} variant="top" src={`${data.image}`} />
                                    <Card.Body style={{ width: "300px" }} >
                                        <Card.Title>Product Name : {data.name} </Card.Title>
                                        <Card.Text>
                                            Price : {data.price}
                                        </Card.Text>
                                        <Card.Text>
                                            In Stock : {data.inStock}
                                        </Card.Text>
                                        <Button variant="dark" color="primary" onClick={() => props.addItem(data)}> Add to Cart</Button>
                                        &nbsp;
                                        <Button variant="dark" color="primary" >View Details</Button>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>
                    )
            }
            )}
        </Row>
    )
}


const mapStateToProps = state => ({
    categoryState: state
});

const mapDispatchToProps =  (dispatch, getState) => ({
    addItem :(addItemFromCard)=>dispatch(actions.updateCardData(addItemFromCard)),
  })


export default connect(mapStateToProps,mapDispatchToProps)(Status);
