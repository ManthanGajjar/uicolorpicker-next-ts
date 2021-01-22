import { Col, Row } from "react-bootstrap";


const Header = () => {
    return (
        <div>
            <div className = "header addBottomBorder">
                <Row>
                    <Col>
                        <b>
                            <a href="/">UI Color Picker</a>
                        </b>
                    </Col>
                    <Col className = "alignRight" >
                        <a target = "_blank" href="https://know-manthan.firebaseapp.com/">Know Manthan</a>
                    </Col>
                </Row>
            </div> <br/>
            <div className = "alignCenter mt-2">
                <h1>
                    Colors For <span className = "changeColor"> All... </span>  
                </h1>
                <h6 className = "mt-2">
                    Just Click To Copy...
                </h6>
            </div>
        </div>
    ) 
}

export default Header;