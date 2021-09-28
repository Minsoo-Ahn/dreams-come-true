import {Fragment} from "react";
import Post from "./Post";
import {Col, Row} from "react-bootstrap";

const PostList = (props) => {
    const posts = props.posts

    return (
        <Fragment>
            <Row xs={1} md={2} className="g-4">
                {posts.map((post) => (
                    <Col>
                        <Post
                            key={post.id}
                            url={post.url}
                            title={post.title}
                            text={post.text}/>
                    </Col>
                ))}
            </Row>
        </Fragment>
    )
}
export default PostList
