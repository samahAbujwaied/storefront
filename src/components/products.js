import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from 'react-bootstrap'
import './profucts.css'

const Status = props => {
    console.log(props.categoryState.data)
    return (
        <Row>
            {props.categoryState.data.products.map(ele => {
                if (ele.category === props.categoryState.data.activeCategory)
                    return (

                        <Col className="cardMinu" sm={4}>
                            <Card key={ele.name} style={{ backgroundColor:"pink", borderRadius:"5%" ,borderColor:"black" , borderBlockStyle:"solid"}} >
                                <div className="col-12  col-lg-3 " >
                                    
                                    <Card.Img style={{ width: '225px'  , height:'255px' , marginLeft:"100px", marginTop:"12px"}} variant="top" src={`${ele.image}`} />
                                    <Card.Body style={{width:"300px" }} >
                                    <Card.Title>Product Name : {ele.name} </Card.Title>
                                        <Card.Text>
                                            Price : {ele.price}
                                        </Card.Text>
                                        <Card.Text>
                                        In Stock : {ele.inStock}
                                        </Card.Text>
                                       
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

export default connect(mapStateToProps)(Status);
