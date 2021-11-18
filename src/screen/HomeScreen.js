import React, { useState } from 'react'
import { Container, Row, Col,Card } from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import SearchBox from '../components/SearchBox'
import axios from 'axios'

function HomeScreen() {

const [clientId] = useState('XarIK5loYrTRQsAAyEeFnnKimPktMRU-6OIV4ltZuVo');

const [result, setResult] = useState([]);

    const url = "https://api.unsplash.com/search/photos?page=1&query=programming&client_id="+clientId
    axios.get(url)
    .then((response) => {
        console.log(response);
        setResult(response.data.results);
    })
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={12} md={3}>
                       <Sidebar/> 
                    </Col>
                    <Col sm={12} md={9}>
                        <SearchBox/>
                        <Container>
                            <h2 style={{fontFamily:'monospace',fontWeight:'bold'}}>Programming</h2>
                            <hr/>
                        </Container>
                            {result.map((photo) => (
                                <div className="thummbnail">                                                                           
                                        <Col key={photo.id} sm={12} md={3} lg={3} xl={3}>
                                            <Card >
                                            <img variant="top" src={photo.urls.small} alt="" className="img-responsive"
                                            style={{ height:'160px'}} />
                                            </Card>
                                            <br/>
                                        </Col>                                    
                                </div>

                            ))}                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeScreen

