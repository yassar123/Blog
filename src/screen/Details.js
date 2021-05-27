import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";

export default function (props) {
    const location = useLocation();
    console.log(location);
    const [comments, setComments] = useState([]);
    const [postData, setPostData] = useState(null);
    const postId = location.search.split("=")[1];

    const getComments =() => {
        fetch("http://jsonplaceholder.typicode.com/comments?postId="+postId)
        .then((buffer) => buffer.text())
        .then((stringResponse) => JSON.parse(stringResponse))
        .then((comments) => setComments(comments));
    }

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/posts/"+postId)
        .then((buffer) => buffer.text())
        .then((stringResponse) => JSON.parse(stringResponse))
        .then((postData) => setPostData(postData));
    }, []);
    console.log(comments);
    return (
        <Row style={{ display: "flex", justifyContent: "center", margin: "15%" }}>
            {postData && 
            (
                <Col md="12">
                    <Card body>
                        <CardTitle tag="h5">{postData.title}</CardTitle>
                        <CardText>{postData.body}</CardText>
                        <Button color="primary" onClick={getComments}>Show Comments</Button>
                    </Card>
                </Col>
            )}
            {comments && comments.map((comment) => <Card body>
                <CardTitle>{comment.email}</CardTitle>
                <CardText>{comment.body}</CardText>
            </Card>)}

        </Row>
    );
}