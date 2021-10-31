import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Popular = () => {
    return (
        <div className = 'container text-start mb-3'>
            <h1 className = 'text-center p-3    '>Popular At This Time</h1>
          <Row xs={1} md={3} className="g-4">
 
            <Col >
                <h5>CHOOSE YOUR PLACE</h5>
                <h1>Popular Destinations</h1>
                <p>It was fantastic going on the sled to see the views on the mountains! And the action of it – I loved going fast!”

                </p>

            </Col>
            <Col >
                <img className = 'img-fluid' src="https://image.freepik.com/free-photo/beautiful-viewpoint-koh-nangyuan-island-surat-thani-thailand_335224-1097.jpg" alt="" />
            </Col>
            <Col >
                <img className = 'img-fluid' src="https://image.freepik.com/free-photo/happy-tourist-sightseeing-city-with-map_329181-477.jpg" alt="" />
            </Col>
            <Col >
                <img className = 'img-fluid' src="https://image.freepik.com/free-photo/female-tourists-are-happy-refreshed-waterfall_1150-5657.jpg" alt="" />
            </Col>
            <Col >
                <img className = 'img-fluid' src="https://image.freepik.com/free-photo/man-sits-end-trolltunga-before-mountains_1304-5416.jpg" alt="" />
            </Col>
            <Col >
            
            </Col>

</Row>
            
        </div>
    );
};

export default Popular;