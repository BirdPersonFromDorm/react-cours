import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../redux/slice/posts";
import {get} from '../api/request'

const Posts = () => {

    const dispatch = useDispatch();

    const {posts, isLoading, error} = useSelector((state) => state.posts);

    const onFetchData = () =>{
        dispatch(fetchData())
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="post-wrap">
            <div onClick={onFetchData}>
                Получить данные
            </div>
            {
                posts?.map(item =>
                <div className="post-item">
                    <h1>
                        {item.title}
                    </h1>
                    <div className="post-line"/>
                    <p>
                        {item.body}
                    </p>
                </div>
                )
            }
        </div>
    );
};

export default Posts;