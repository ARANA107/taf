import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from '../posts/Posts';
import Pagination from './Pagination';
import data from '../../data/data.json';

const Accessories = () => {
    const [posts, setPosts] = useState([{}]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostsPerPage] = useState(5);

    useEffect(() => {
        setPosts(data);
    }, [])

    const indexOdLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOdLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOdLastPost);
    console.log(currentPosts);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div>
            <h1>This is Accessories!</h1>
            <Posts loading={loading} posts={currentPosts} />
            <Pagination postsPerPage={postPerPage}
                totalPosts={posts.length}
                paginate={paginate} />
        </div>
    )

}

export default Accessories;