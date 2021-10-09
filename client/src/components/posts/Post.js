import {Card} from "react-bootstrap";
import image from "../../asset/noimage.webp"
import {Link} from "react-router-dom";
import React from "react";

function Post(props) {
    return (
        <div className="card mb-3" style={{width: '500px'}}>
            <Link to={props.post.id}>
                    <div className="col-md-4">
                        <svg
                            width="100%"
                            height="150"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="Placeholder: Image"
                            preserveAspectRatio="xMidYMid slice"
                            role="img">
                            {
                                props.post.imageURL == null
                                    ? <image href={image} height="100%" width="100%"/>
                                    : <image href={props.post.imageURL} height="100%" width="100%"/>
                            }
                        </svg>
                    </div>
                    <div className="col-md-8">
                            <h2 className="card-title">{props.post.title}</h2>
                            <p className="card-text text-muted">
                                {props.post.content}
                            </p>
                    </div>
            </Link>
        </div>
    )
}

export default Post
