import React, {useState} from 'react'
import axios from 'axios';
import { Card, Col } from 'react-bootstrap'
import NavDrop from './NavDrop'


function SearchBox() {

const [photo,setPhoto] = useState('');
const [clientId] = useState('XarIK5loYrTRQsAAyEeFnnKimPktMRU-6OIV4ltZuVo');

const [result, setResult] = useState([]);

function handleChange(event){
    setPhoto(event.target.value);
}

function handleSubmit(event){

    const url = "https://api.unsplash.com/search/photos?page=1&query="+photo+"&client_id="+clientId
    axios.get(url)
    .then((response) => {
        console.log(response);
        setResult(response.data.results);
    })
}


return (
    <div>
        <div className="row height d-flex justify-content-center align-items-center">
            <div className="col-md-9">
                <div className="search"> <i class="fa fa-search"></i>
                    <input onChange={handleChange} type="text" class="form-control" placeholder="Find Something"/>
                    <button onClick={handleSubmit} className="btn btn-primary">Search</button> 
                    </div>
            </div>
        </div>
        <br/>
        <NavDrop/>
            {result.map((photo) => (
                <div className="thummbnail">
                    
                        
                        <Col sm={12} md={3} lg={4} xl={3}>
                            <Card >
                            <img variant="top" src={photo.urls.small} alt="" className="img-responsive"
                            style={{ height:'160px'}} />
                            </Card>
                            <br/>
                        </Col>
                    
                </div>

            ))}

    </div>
        
)
}

export default SearchBox
