import React, { useEffect, useState } from 'react'
import {Row, Col, Table} from 'react-bootstrap'
const PostsPage = () => {
    const [list, setList] =useState([]);
    const [loading, setLoading] = useState(false);

    const getPosts = () => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setList(json);
            setLoading(false);
        })
    }
    useEffect(()=> {  //익명의 함수, 랜더링이 될때마다 실행되는 함수
        getPosts();
    },[] ); //처음 랜더링 될때만 실행되도록 []을 넣음
    if(loading) return <h1 className='text-center my-5'>로딩중입니다...</h1>
  return (
    <Row className='justify-content-center mx-3'>
        <Col md={10}>
            <h1 className='text-center my-3'>게시글</h1>
            <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <td>ID.</td>
                        <td>Title</td>
                    </tr>
                </thead>
                <tbody>
                    {list.map(post=>
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td><div className='ellipsis'>{post.title}</div></td>
                        </tr>   
                    )}
                </tbody>
            </Table>
        </Col>
    </Row>
  )
}

export default PostsPage