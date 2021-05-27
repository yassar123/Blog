import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import React, { useEffect, useState } from 'react'
import { useLocation, Link } from "react-router-dom";

export default function (props) {
    const location = useLocation();

    const [posts, setPosts] = useState(null);

    const userId = location.search.split("=")[1];
    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/posts?userId=" + userId)
            .then((buffer) => buffer.text())
            .then(stringResponse => JSON.parse(stringResponse))
            .then((data) => setPosts(data));
    }, []);
    console.log(posts);
    return (
        <Row style={{ display: "flex", justifyContent: "center", margin: "15%" }}>
            {posts && posts.map(post => (
                <Col md="12">
                    <Card body>
                        <CardTitle tag="h5">{post.title}</CardTitle>
                        <CardText>{post.body}</CardText>
                        <Button color="primary">
                            <Link style={{color:"white"}}
                             to={"/details?postId=" + post.id}>Show details</Link>
                        </Button>
                    </Card>
                </Col>
            ))}

        </Row>
    );
};