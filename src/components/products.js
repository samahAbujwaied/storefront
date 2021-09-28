import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col ,Button } from 'react-bootstrap'
import './profucts.css'
import * as actions from "../store/actions";
// import { addItem } from "../store/cart"

const Status = props => {
    console.log(props.categoryState.dataa)
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
                                        <Button variant="dark" color="primary" onClick={() => props.addItem(data.name,data.inStock)}> Add to Cart</Button>
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
// const mapDispatchToProps = { addItem }

const mapDispatchToProps =  (dispatch, getState) => ({
    addItem :(addItemFromCard)=>dispatch(actions.addItem(addItemFromCard)),
  })


export default connect(mapStateToProps,mapDispatchToProps)(Status);
