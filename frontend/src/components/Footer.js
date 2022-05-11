import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <Container>
      <Row>
        <Col className='text-center py-3'>Copyright &copy; JMStore</Col>
      </Row>
    </Container>
  )
}

export default Footer