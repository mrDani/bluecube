import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import SearchBox from '../components/SearchBox'

function HomeScreen() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={12} md={3}>
                       <Sidebar/> 
                    </Col>
                    <Col sm={12} md={9}>
                        <SearchBox/>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeScreen

