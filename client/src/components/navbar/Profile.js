import image from "../../asset/images.jpeg"
import {Card, FormControl, InputGroup} from "react-bootstrap";

function Profile() {
    return (
        <Card className={"profile"}>
            <img className={"profile-img"} src={image} alt={"my Photo"}/>
            <InputGroup className="mb-3 profile-search">
                <FormControl
                    className={"profile-search-size"}
                    placeholder="Search..."
                    aria-label="Search..."
                    aria-describedby="basic-addon2"
                />
            </InputGroup>
        </Card>
    );
}

export default Profile;
