import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { CONSTANCE } from '../helper/constance';
import { SetTab } from "../redux/actions/actions";

const Header = () => {
    const selectedTab = useSelector(state => state.SwitchReducer);
    const tabType = CONSTANCE.TAB_TYPES;
    const dispatch = useDispatch();

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
            <div className = "alignCenter m-5">
                        <div className = {"btn " + (selectedTab === tabType[0] ? "btn-danger" : "")  } onClick = { () => { dispatch(SetTab(true))}}>
                            {tabType[0]}
                        </div>
                        <div className = { "btn ml-2 "  + (selectedTab === tabType[1] ? "btn-danger" : "")} onClick = { () => { dispatch(SetTab(false))}}>
                            {tabType[1]}
                        </div>
            </div>
        </div>
    ) 
}

export default Header;