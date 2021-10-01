import React from 'react';
import Button from "react-bootstrap/Button";

function Home() {
    return (
        <div className="card">
            <div className="card-header">Example Component</div>

            <div className="card-body">I'm an example component!</div>
            <Button variant="outline-primary">Button Test</Button>
        </div>
    );
}

export default Home;
