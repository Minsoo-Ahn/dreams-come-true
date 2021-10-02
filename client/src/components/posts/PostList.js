import {Fragment} from "react";
import Post from "./Post";
import {Col, Row} from "react-bootstrap";
import axios from "axios";

const PostList = (props) => {
    const posts = props.posts

    // try {
    //     let postsList = await axios.get("/api/getPosts");
    //     postsList.data.map(post => {
    //         console.log(post)
    //     })
    // } catch (err) {
    //     console.log(err);
    // }

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
