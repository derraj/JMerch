import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from '../Rating'

import products from '../../products'
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
function ProductScreen() {
  const match = useParams();
  const product = products.find((p) => p._id == match.id);

  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews}  reviews`} color={'#f8e825'}/>
            </ListGroup.Item>
            <ListGroupItem>
              Price: ${product.price}
            </ListGroupItem>
            <ListGroupItem>
              {product.description}
            </ListGroupItem>
          </ListGroup>

        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={product.countInStock == 0}>Add to cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen