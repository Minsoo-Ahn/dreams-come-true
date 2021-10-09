import {Fragment} from "react";
import Post from "./Post";
import {Col, Row} from "react-bootstrap";
import axios from "axios";

const PostList = (props) => {
    const posts = props.posts

    return (
        <Fragment>
            {posts.map((post) => (
                <>
                    <Row className="g-4" style={{marginLeft: 50}}>
                        <Col>
                            <Post
                                key={post.id}
                                post={post}/>
                        </Col>
                    </Row>
                    <hr/>
                </>
            ))}
        </Fragment>
    )
}
export default PostList
