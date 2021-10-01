import {Card} from "react-bootstrap";
import image from "../../asset/images.jpeg"
import {Link} from "react-router-dom";
import React from "react";

function Post(props) {
    return (
        <div className="card mb-3" style={{width: '500px'}}>
            <Link to={props.url}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <svg
                            width="100%"
                            height="250"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="Placeholder: Image"
                            preserveAspectRatio="xMidYMid slice"
                            role="img"
                        >
                            <image href={image} height="100%" width="100%"/>
                        </svg>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text text-muted">
                                {props.text}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Post
