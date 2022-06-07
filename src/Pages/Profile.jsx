import {Avatar, Col, Row} from "antd";
import ProfileLeft from "../Components/ProfileLeft";
import ProfileRight from "../Components/ProfileRight";

const Profile = () => {

    return ( 
        <>
            <Row style={{marginTop: '20px'}}>
                <Col  xs={0}
                      sm={0}
                      md={0}
                      lg={1}/>
                <ProfileLeft/>
                <Col xs={0}
                     sm={0}
                     md={0}
                     lg={1}/>
                <ProfileRight/>
                <Col xs={0}
                     sm={0}
                     md={0}
                     lg={1}/>
            </Row>
        </>
     );
}
 
export default Profile;